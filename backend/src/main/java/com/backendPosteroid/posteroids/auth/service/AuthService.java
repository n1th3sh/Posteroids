package com.backendPosteroid.posteroids.auth.service;

import com.backendPosteroid.posteroids.auth.entity.AppUser;
import com.backendPosteroid.posteroids.auth.entity.EmailVerificationCode;
import com.backendPosteroid.posteroids.auth.repository.AppUserRepository;
import com.backendPosteroid.posteroids.auth.repository.EmailVerificationCodeRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.security.SecureRandom;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Locale;

@Service
public class AuthService {
    private final AppUserRepository users;
    private final EmailVerificationCodeRepository codes;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final JwtService jwtService;
    private final SecureRandom random = new SecureRandom();
    private final int codeExpirationMinutes;
    private final String mailFrom;

    public AuthService(AppUserRepository users, EmailVerificationCodeRepository codes,
                       PasswordEncoder passwordEncoder, JavaMailSender mailSender, JwtService jwtService,
                       @Value("${app.email.verification-expiration-minutes}") int codeExpirationMinutes,
                       @Value("${app.email.from}") String mailFrom) {
        this.users = users;
        this.codes = codes;
        this.passwordEncoder = passwordEncoder;
        this.mailSender = mailSender;
        this.jwtService = jwtService;
        this.codeExpirationMinutes = codeExpirationMinutes;
        this.mailFrom = mailFrom;
    }

    @Transactional
    public void register(String emailValue, String displayNameValue, String password) {
        String email = normalizeEmail(emailValue);
        String displayName = displayNameValue == null ? "" : displayNameValue.trim();
        if (!email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) badRequest("Enter a valid email address");
        if (displayName.isBlank() || displayName.length() > 100) badRequest("Name must be between 1 and 100 characters");
        if (password == null || password.length() < 8 || password.length() > 72) badRequest("Password must be between 8 and 72 characters");
        if (users.existsByEmailIgnoreCase(email)) throw new ResponseStatusException(HttpStatus.CONFLICT, "An account already exists for this email");

        AppUser user = users.save(new AppUser(email, displayName, passwordEncoder.encode(password), false));
        sendVerificationCode(user.getEmail());
    }

    @Transactional(noRollbackFor = ResponseStatusException.class)
    public AuthResponse verifyEmail(String emailValue, String code) {
        String email = normalizeEmail(emailValue);
        AppUser user = users.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email or code"));
        EmailVerificationCode stored = codes.findTopByEmailOrderByCreatedAtDesc(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email or code"));
        if (stored.getExpiresAt().isBefore(Instant.now())) {
            codes.delete(stored);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid or expired verification code");
        }
        if (stored.getFailedAttempts() >= 5) {
            codes.delete(stored);
            throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Too many incorrect codes. Request a new code.");
        }
        if (code == null || !passwordEncoder.matches(code, stored.getCodeHash())) {
            stored.incrementFailedAttempts();
            codes.save(stored);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid or expired verification code");
        }
        user.setEmailVerified(true);
        users.save(user);
        codes.deleteByEmail(email);
        return response(user);
    }

    @Transactional
    public void resendCode(String emailValue) {
        String email = normalizeEmail(emailValue);
        AppUser user = users.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to send verification code"));
        if (user.isEmailVerified()) throw new ResponseStatusException(HttpStatus.CONFLICT, "Email is already verified");
        sendVerificationCode(email);
    }

    public AuthResponse login(String emailValue, String password) {
        AppUser user = users.findByEmailIgnoreCase(normalizeEmail(emailValue)).orElse(null);
        if (user == null || user.getPasswordHash() == null || !passwordEncoder.matches(password == null ? "" : password, user.getPasswordHash())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }
        if (!user.isEmailVerified()) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Verify your email before signing in");
        return response(user);
    }

    @Transactional
    public AppUser findOrCreateGoogleUser(String emailValue, String name) {
        String email = normalizeEmail(emailValue);
        if (email.isBlank()) throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Google did not return an email address");
        return users.findByEmailIgnoreCase(email).map(user -> {
            if (!user.isEmailVerified()) { user.setEmailVerified(true); users.save(user); }
            return user;
        }).orElseGet(() -> users.save(new AppUser(email, name == null || name.isBlank() ? email : name.substring(0, Math.min(name.length(), 100)), null, true)));
    }

    public AuthResponse response(AppUser user) { return new AuthResponse(jwtService.createToken(user), user.getEmail(), user.getDisplayName(), user.getRole()); }

    private void sendVerificationCode(String email) {
        codes.findTopByEmailOrderByCreatedAtDesc(email).ifPresent(previous -> {
            if (previous.getCreatedAt().isAfter(Instant.now().minus(60, ChronoUnit.SECONDS))) {
                throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Wait 60 seconds before requesting another code");
            }
        });
        String rawCode = String.format("%06d", random.nextInt(1_000_000));
        codes.deleteByEmail(email);
        codes.save(new EmailVerificationCode(email, passwordEncoder.encode(rawCode), Instant.now().plus(codeExpirationMinutes, ChronoUnit.MINUTES)));
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFrom);
        message.setTo(email);
        message.setSubject("Your Posteroids verification code");
        message.setText("Your verification code is " + rawCode + ". It expires in " + codeExpirationMinutes + " minutes.");
        mailSender.send(message);
    }

    private String normalizeEmail(String email) { return email == null ? "" : email.trim().toLowerCase(Locale.ROOT); }
    private void badRequest(String message) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message); }

    public record AuthResponse(String token, String email, String name, String role) {}
}
