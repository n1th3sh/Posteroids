package com.backendPosteroid.posteroids.auth.config;

import com.backendPosteroid.posteroids.auth.service.AuthService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
    private final AuthService authService;
    private final String frontendUrl;
    public OAuth2LoginSuccessHandler(AuthService authService, @Value("${app.frontend-url}") String frontendUrl) {
        this.authService = authService;
        this.frontendUrl = frontendUrl;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        OAuth2User principal = (OAuth2User) authentication.getPrincipal();
        var user = authService.findOrCreateGoogleUser(principal.getAttribute("email"), principal.getAttribute("name"));
        String token = authService.response(user).token();
        response.sendRedirect(frontendUrl.replaceAll("/$", "") + "/auth/callback#token=" +
                URLEncoder.encode(token, StandardCharsets.UTF_8));
    }
}
