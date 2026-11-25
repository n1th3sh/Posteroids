package com.backendPosteroid.posteroids.services;

import com.backendPosteroid.posteroids.dto.ProductDto;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    ProductDto addProduct(ProductDto product);
    List<ProductDto> getAllProducts();
    ProductDto getProductById(UUID id);
}
