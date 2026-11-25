package com.backendPosteroid.posteroids.repositories;

import com.backendPosteroid.posteroids.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
}
