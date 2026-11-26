package com.backendPosteroid.posteroids.dto;

import java.math.BigDecimal;
import java.util.UUID;

public record OrderItemResponse(UUID productId, String name, String image, String categoryName,
                                BigDecimal unitPrice, int quantity, BigDecimal lineTotal) {}
