package com.backendPosteroid.posteroids.entities;

import com.backendPosteroid.posteroids.auth.entity.AppUser;
import jakarta.persistence.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private AppUser user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("createdAt ASC")
    private List<CartItem> items = new ArrayList<>();

    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Column(nullable = false)
    private Instant updatedAt = Instant.now();

    protected Cart() {}

    public Cart(AppUser user) { this.user = user; }

    @PreUpdate
    protected void touch() { updatedAt = Instant.now(); }

    public UUID getId() { return id; }
    public AppUser getUser() { return user; }
    public List<CartItem> getItems() { return items; }
}
