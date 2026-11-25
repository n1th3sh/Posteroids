package com.backendPosteroid.posteroids.services;

import com.backendPosteroid.posteroids.dto.ProductDto;
import com.backendPosteroid.posteroids.dto.CategoryDto;
import com.backendPosteroid.posteroids.entities.Category;
import com.backendPosteroid.posteroids.entities.Product;
import com.backendPosteroid.posteroids.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    public ProductServiceImpl(ProductRepository productRepository, CategoryService categoryService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
    }

    @Override
    public ProductDto addProduct(ProductDto productDto) {
        Category category = categoryService.getCategory(productDto.getCategoryId());

        Product newProduct = Product.builder()
                .name(productDto.getName())
                .image(productDto.getImage())
                .price(productDto.getPrice())
                .rating(productDto.getRating())
                .purchases(productDto.getPurchases())
                .dateAdded(productDto.getDateAdded())
                .category(category)
                .build();

        return toDto(productRepository.save(newProduct));
    }

    @Override
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::toDto)
                .toList();
    }

    @Override
    public ProductDto getProductById(UUID id) {
        return productRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found: " + id));
    }

    private ProductDto toDto(Product product) {
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setImage(product.getImage());
        dto.setPrice(product.getPrice());
        dto.setRating(product.getRating());
        dto.setPurchases(product.getPurchases());
        dto.setDateAdded(product.getDateAdded());
        dto.setCategoryId(product.getCategory().getId());
        dto.setCategoryName(product.getCategory().getName());
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(product.getCategory().getId());
        categoryDto.setName(product.getCategory().getName());
        categoryDto.setDescription(product.getCategory().getDescription());
        dto.setCategory(categoryDto);
        dto.setImage(toPublicImageUrl(product.getImage(), product.getCategory().getName()));
        return dto;
    }

    private String toPublicImageUrl(String image, String categoryName) {
        if (image == null || image.startsWith("https://jryfoojn1gywdsfo.public.blob.vercel-storage.com/")) {
            return image;
        }
        String filename = image.substring(image.lastIndexOf('/') + 1);
        String folder = "Polaroids".equalsIgnoreCase(categoryName) ? "polaroids" : "wall-posters";
        return "https://jryfoojn1gywdsfo.public.blob.vercel-storage.com/" + folder + "/"
                + filename.replace(" ", "%20");
    }

}
