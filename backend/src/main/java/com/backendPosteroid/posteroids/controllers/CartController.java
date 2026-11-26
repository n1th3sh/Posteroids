package com.backendPosteroid.posteroids.controllers;

import com.backendPosteroid.posteroids.dto.CartResponse;
import com.backendPosteroid.posteroids.dto.SetCartItemRequest;
import com.backendPosteroid.posteroids.services.CartOrderService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartOrderService storefront;

    public CartController(CartOrderService storefront) { this.storefront = storefront; }

    @GetMapping
    public CartResponse getCart(Authentication authentication) {
        return storefront.getCart(authentication.getName());
    }

    @PutMapping("/items/{productId}")
    public CartResponse setItem(@PathVariable UUID productId, @RequestBody SetCartItemRequest request,
                                Authentication authentication) {
        return storefront.setItemQuantity(authentication.getName(), productId, request.quantity());
    }

    @DeleteMapping("/items/{productId}")
    public CartResponse removeItem(@PathVariable UUID productId, Authentication authentication) {
        return storefront.removeItem(authentication.getName(), productId);
    }
}
