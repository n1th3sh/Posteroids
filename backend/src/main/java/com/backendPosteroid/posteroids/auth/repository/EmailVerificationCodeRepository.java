package com.backendPosteroid.posteroids.auth.repository;

import com.backendPosteroid.posteroids.auth.entity.EmailVerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface EmailVerificationCodeRepository extends JpaRepository<EmailVerificationCode, UUID> {
    Optional<EmailVerificationCode> findTopByEmailOrderByCreatedAtDesc(String email);
    void deleteByEmail(String email);
}
