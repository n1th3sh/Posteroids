package com.backendPosteroid.posteroids.repositories;

import com.backendPosteroid.posteroids.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
}
