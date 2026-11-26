package com.backendPosteroid.posteroids.controllers;

import com.backendPosteroid.posteroids.dto.OrderResponse;
import com.backendPosteroid.posteroids.dto.ShippingAddressRequest;
import com.backendPosteroid.posteroids.services.CartOrderService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final CartOrderService storefront;

    public OrderController(CartOrderService storefront) { this.storefront = storefront; }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse placeOrder(@RequestBody ShippingAddressRequest address, Authentication authentication) {
        return storefront.placeOrder(authentication.getName(), address);
    }

    @GetMapping
    public List<OrderResponse> listOrders(Authentication authentication) {
        return storefront.listOrders(authentication.getName());
    }

    @GetMapping("/{orderId}")
    public OrderResponse getOrder(@PathVariable UUID orderId, Authentication authentication) {
        return storefront.getOrder(authentication.getName(), orderId);
    }
}
