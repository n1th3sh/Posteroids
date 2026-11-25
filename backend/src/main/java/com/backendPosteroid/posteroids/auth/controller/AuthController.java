package com.backendPosteroid.posteroids.auth.controller;

import com.backendPosteroid.posteroids.auth.entity.AppUser;
import com.backendPosteroid.posteroids.auth.repository.AppUserRepository;
import com.backendPosteroid.posteroids.auth.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;
    private final AppUserRepository users;

    public AuthController(AuthService authService, AppUserRepository users) {
        this.authService = authService;
        this.users = users;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegisterRequest request) {
        authService.register(request.email(), request.name(), request.password());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(Map.of("message", "Verification code sent to your email"));
    }

    @PostMapping("/verify-email")
    public AuthService.AuthResponse verify(@RequestBody VerifyRequest request) {
        return authService.verifyEmail(request.email(), request.code());
    }

    @PostMapping("/resend-code")
    public ResponseEntity<Map<String, String>> resend(@RequestBody EmailRequest request) {
        authService.resendCode(request.email());
        return ResponseEntity.accepted().body(Map.of("message", "Verification code sent"));
    }

    @PostMapping("/login")
    public AuthService.AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request.email(), request.password());
    }

    @GetMapping("/me")
    public AuthService.AuthResponse me(Authentication authentication) {
        AppUser user = users.findByEmailIgnoreCase(authentication.getName()).orElseThrow();
        return authService.response(user);
    }

    public record RegisterRequest(String email, String name, String password) {}
    public record LoginRequest(String email, String password) {}
    public record VerifyRequest(String email, String code) {}
    public record EmailRequest(String email) {}
}
