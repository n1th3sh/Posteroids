package com.backendPosteroid.posteroids.repositories;

import com.backendPosteroid.posteroids.entities.StoreOrder;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StoreOrderRepository extends JpaRepository<StoreOrder, UUID> {
    @EntityGraph(attributePaths = "items")
    List<StoreOrder> findByUser_IdOrderByCreatedAtDesc(UUID userId);

    @EntityGraph(attributePaths = "items")
    Optional<StoreOrder> findByIdAndUser_Id(UUID orderId, UUID userId);
}
