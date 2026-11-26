package com.backendPosteroid.posteroids.dto;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record OrderResponse(UUID id, String status, BigDecimal total, String currency,
                            String shippingName, String shippingPhone, String addressLine1,
                            String addressLine2, String city, String region, String postalCode,
                            String countryCode, Instant createdAt, List<OrderItemResponse> items) {}
