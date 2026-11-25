package com.backendPosteroid.posteroids.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class ProductDto {
    private UUID id;
    private String name;
    private String image;
    private BigDecimal price;
    private Double rating;
    private Integer purchases;
    private LocalDate dateAdded;
    // Input for product creation; output also includes the nested category below.
    private UUID categoryId;
    private String categoryName;
    private CategoryDto category;
}
