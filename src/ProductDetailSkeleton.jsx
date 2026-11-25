function ProductDetailSkeleton() {
  return (
    <div
      className="view-page product-detail-skeleton"
      aria-busy="true"
      aria-label="Loading product details"
    >
      <div className="view-container">
        <div className="view-image-section">
          <div className="skeleton skeleton-product-image" />
        </div>

        <div className="view-details">
          <div className="skeleton skeleton-type" />
          <div className="skeleton skeleton-title" />

          <div className="skeleton-rating-row">
            <div className="skeleton skeleton-rating" />
            <div className="skeleton skeleton-purchases" />
          </div>

          <div className="skeleton skeleton-price" />
          <div className="skeleton skeleton-description" />
          <div className="skeleton skeleton-divider" />

          <div className="skeleton skeleton-info-line" />
          <div className="skeleton skeleton-info-line" />
          <div className="skeleton skeleton-info-line" />
          <div className="skeleton skeleton-info-line" />

          <div className="skeleton skeleton-button" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;