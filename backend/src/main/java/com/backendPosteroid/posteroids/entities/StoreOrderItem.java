package com.backendPosteroid.posteroids.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "order_items", indexes = {
        @Index(name = "idx_order_items_order", columnList = "order_id"),
        @Index(name = "idx_order_items_product", columnList = "product_id")
})
public class StoreOrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private StoreOrder order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(nullable = false, length = 255)
    private String productName;
    @Column(nullable = false, length = 1000)
    private String productImage;
    @Column(nullable = false, length = 100)
    private String categoryName;
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal unitPrice;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    protected StoreOrderItem() {}

    public StoreOrderItem(StoreOrder order, Product product, String productName, String productImage,
                          String categoryName, BigDecimal unitPrice, int quantity) {
        this.order = order;
        this.product = product;
        this.productName = productName;
        this.productImage = productImage;
        this.categoryName = categoryName;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    public UUID getProductId() { return product == null ? null : product.getId(); }
    public String getProductName() { return productName; }
    public String getProductImage() { return productImage; }
    public String getCategoryName() { return categoryName; }
    public BigDecimal getUnitPrice() { return unitPrice; }
    public int getQuantity() { return quantity; }
}
