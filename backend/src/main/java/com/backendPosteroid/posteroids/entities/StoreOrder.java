package com.backendPosteroid.posteroids.entities;

import com.backendPosteroid.posteroids.auth.entity.AppUser;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders", indexes = @Index(name = "idx_orders_user_created", columnList = "user_id, created_at"))
public class StoreOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private AppUser user;

    @Column(nullable = false, length = 24)
    private String status;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal total;

    @Column(nullable = false, length = 3, columnDefinition = "char(3)")
    private String currency;

    @Column(nullable = false, length = 100)
    private String shippingName;
    @Column(nullable = false, length = 30)
    private String shippingPhone;
    @Column(nullable = false, length = 200)
    private String addressLine1;
    @Column(length = 200)
    private String addressLine2;
    @Column(nullable = false, length = 100)
    private String city;
    @Column(nullable = false, length = 100)
    private String region;
    @Column(nullable = false, length = 20)
    private String postalCode;
    @Column(nullable = false, length = 2, columnDefinition = "char(2)")
    private String countryCode;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("createdAt ASC")
    private List<StoreOrderItem> items = new ArrayList<>();

    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();
    @Column(nullable = false)
    private Instant updatedAt = Instant.now();

    protected StoreOrder() {}

    public StoreOrder(AppUser user, String status, BigDecimal total, String currency,
                      String shippingName, String shippingPhone, String addressLine1, String addressLine2,
                      String city, String region, String postalCode, String countryCode) {
        this.user = user;
        this.status = status;
        this.total = total;
        this.currency = currency;
        this.shippingName = shippingName;
        this.shippingPhone = shippingPhone;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }

    public void addItem(StoreOrderItem item) { items.add(item); }
    public UUID getId() { return id; }
    public String getStatus() { return status; }
    public BigDecimal getTotal() { return total; }
    public String getCurrency() { return currency; }
    public String getShippingName() { return shippingName; }
    public String getShippingPhone() { return shippingPhone; }
    public String getAddressLine1() { return addressLine1; }
    public String getAddressLine2() { return addressLine2; }
    public String getCity() { return city; }
    public String getRegion() { return region; }
    public String getPostalCode() { return postalCode; }
    public String getCountryCode() { return countryCode; }
    public List<StoreOrderItem> getItems() { return items; }
    public Instant getCreatedAt() { return createdAt; }
}
