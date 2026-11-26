package com.backendPosteroid.posteroids.services;

import com.backendPosteroid.posteroids.auth.entity.AppUser;
import com.backendPosteroid.posteroids.auth.repository.AppUserRepository;
import com.backendPosteroid.posteroids.dto.*;
import com.backendPosteroid.posteroids.entities.*;
import com.backendPosteroid.posteroids.repositories.CartRepository;
import com.backendPosteroid.posteroids.repositories.ProductRepository;
import com.backendPosteroid.posteroids.repositories.StoreOrderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Service
public class CartOrderService {
    private static final String CURRENCY = "INR";
    private final AppUserRepository users;
    private final CartRepository carts;
    private final ProductRepository products;
    private final StoreOrderRepository orders;

    public CartOrderService(AppUserRepository users, CartRepository carts, ProductRepository products, StoreOrderRepository orders) {
        this.users = users;
        this.carts = carts;
        this.products = products;
        this.orders = orders;
    }

    @Transactional(readOnly = true)
    public CartResponse getCart(String email) {
        AppUser user = requireUser(email);
        return carts.findByUser_Id(user.getId()).map(this::toCartResponse)
                .orElseGet(() -> new CartResponse(null, List.of(), BigDecimal.ZERO.setScale(2), CURRENCY));
    }

    @Transactional
    public CartResponse setItemQuantity(String email, UUID productId, Integer quantity) {
        if (quantity == null || quantity < 1 || quantity > 99) throw badRequest("Quantity must be between 1 and 99");
        AppUser user = lockUser(email);
        Cart cart = getOrCreateCart(user);
        Product product = products.findById(productId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        CartItem item = cart.getItems().stream().filter(existing -> existing.getProduct().getId().equals(productId)).findFirst().orElse(null);
        if (item == null) cart.getItems().add(new CartItem(cart, product, quantity));
        else item.setQuantity(quantity);
        carts.save(cart);
        return toCartResponse(cart);
    }

    @Transactional
    public CartResponse removeItem(String email, UUID productId) {
        AppUser user = lockUser(email);
        carts.findByUser_Id(user.getId()).ifPresent(cart -> {
            cart.getItems().removeIf(item -> item.getProduct().getId().equals(productId));
            carts.save(cart);
        });
        return getCart(email);
    }

    @Transactional
    public OrderResponse placeOrder(String email, ShippingAddressRequest address) {
        validateAddress(address);
        AppUser user = lockUser(email);
        Cart cart = carts.findByUser_Id(user.getId()).orElseThrow(() -> conflict("Your cart is empty"));
        if (cart.getItems().isEmpty()) throw conflict("Your cart is empty");

        BigDecimal total = cart.getItems().stream()
                .map(item -> item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add).setScale(2);
        StoreOrder order = new StoreOrder(user, "PLACED", total, CURRENCY,
                trim(address.name()), trim(address.phone()), trim(address.addressLine1()), nullableTrim(address.addressLine2()),
                trim(address.city()), trim(address.region()), trim(address.postalCode()), trim(address.countryCode()).toUpperCase(Locale.ROOT));
        for (CartItem cartItem : cart.getItems()) {
            Product product = cartItem.getProduct();
            order.addItem(new StoreOrderItem(order, product, product.getName(), product.getImage(),
                    product.getCategory().getName(), product.getPrice(), cartItem.getQuantity()));
        }
        StoreOrder saved = orders.saveAndFlush(order);
        cart.getItems().clear();
        carts.save(cart);
        return toOrderResponse(saved);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> listOrders(String email) {
        return orders.findByUser_IdOrderByCreatedAtDesc(requireUser(email).getId()).stream().map(this::toOrderResponse).toList();
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrder(String email, UUID orderId) {
        return orders.findByIdAndUser_Id(orderId, requireUser(email).getId()).map(this::toOrderResponse)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found"));
    }

    private Cart getOrCreateCart(AppUser user) {
        return carts.findByUser_Id(user.getId()).orElseGet(() -> {
            carts.saveAndFlush(new Cart(user));
            return carts.findByUser_Id(user.getId()).orElseThrow();
        });
    }

    private AppUser requireUser(String email) {
        return users.findByEmailIgnoreCase(email).orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated account not found"));
    }

    private AppUser lockUser(String email) {
        return users.findByEmailIgnoreCaseForUpdate(email).orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated account not found"));
    }

    private CartResponse toCartResponse(Cart cart) {
        List<CartItemResponse> items = cart.getItems().stream().map(item -> {
            Product product = item.getProduct();
            BigDecimal lineTotal = product.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())).setScale(2);
            return new CartItemResponse(product.getId(), product.getName(), product.getImage(), product.getCategory().getName(), product.getPrice(), item.getQuantity(), lineTotal);
        }).toList();
        BigDecimal subtotal = items.stream().map(CartItemResponse::lineTotal).reduce(BigDecimal.ZERO, BigDecimal::add).setScale(2);
        return new CartResponse(cart.getId(), items, subtotal, CURRENCY);
    }

    private OrderResponse toOrderResponse(StoreOrder order) {
        List<OrderItemResponse> items = order.getItems().stream().map(item -> {
            BigDecimal lineTotal = item.getUnitPrice().multiply(BigDecimal.valueOf(item.getQuantity())).setScale(2);
            return new OrderItemResponse(item.getProductId(), item.getProductName(), item.getProductImage(), item.getCategoryName(), item.getUnitPrice(), item.getQuantity(), lineTotal);
        }).toList();
        return new OrderResponse(order.getId(), order.getStatus(), order.getTotal(), order.getCurrency(), order.getShippingName(), order.getShippingPhone(),
                order.getAddressLine1(), order.getAddressLine2(), order.getCity(), order.getRegion(), order.getPostalCode(), order.getCountryCode(), order.getCreatedAt(), items);
    }

    private void validateAddress(ShippingAddressRequest address) {
        if (address == null) throw badRequest("Shipping address is required");
        check(address.name(), 100, "Name"); check(address.phone(), 30, "Phone");
        check(address.addressLine1(), 200, "Address"); optionalCheck(address.addressLine2(), 200, "Address line 2");
        check(address.city(), 100, "City"); check(address.region(), 100, "State or region"); check(address.postalCode(), 20, "Postal code");
        if (address.countryCode() == null || !address.countryCode().trim().matches("(?i)^[A-Z]{2}$")) throw badRequest("Country code must be a two-letter ISO code");
    }

    private void check(String value, int max, String label) {
        if (value == null || value.isBlank() || value.trim().length() > max) throw badRequest(label + " is required and must be at most " + max + " characters");
    }
    private void optionalCheck(String value, int max, String label) {
        if (value != null && value.trim().length() > max) throw badRequest(label + " must be at most " + max + " characters");
    }
    private String trim(String value) { return value.trim(); }
    private String nullableTrim(String value) { return value == null || value.isBlank() ? null : value.trim(); }
    private ResponseStatusException badRequest(String message) { return new ResponseStatusException(HttpStatus.BAD_REQUEST, message); }
    private ResponseStatusException conflict(String message) { return new ResponseStatusException(HttpStatus.CONFLICT, message); }
}
