import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./services/productsApi";
import { useCart } from "./features/cart/CartProvider";
import { getProductCategoryName } from "./utils/product";
import { getProductImageUrl } from "./utils/productImage";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

function ViewCard() {
  const { id } = useParams();
  const { addProduct, ready: cartReady } = useCart();
  const [added, setAdded] = useState(false);
  const { data: product, isLoading, isError } = useGetProductQuery(id);

  if (isLoading) {
  return <ProductDetailSkeleton />;
}

  if (isError || !product) {
    return <div className="status-container"><h3 className="error-message">Could not load this product from the backend.</h3></div>;
  }

  const categoryName = getProductCategoryName(product);

  const handleAddToCart = async () => {
    try {
      await addProduct(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch {
      setAdded(false);
    }
  };

  return (
    <div className="view-page">
      <div className="view-container">
        {/* Product Image */}
        <div className="view-image-section">
          <img
            className="view-product-image"
            src={getProductImageUrl(product.image, categoryName)}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/logo512.png";
            }}
          />
        </div>

        {/* Product Details */}
        <div className="view-details">
          <p className="view-type">
            {categoryName.toLowerCase().includes("polaroid") ? "POLAROID" : "WALL POSTER"}
          </p>

          <h1 className="view-product-name">{product.name}</h1>

          <div className="view-rating">
            <span>★ {product.rating ?? "—"}</span>
            <span>{product.purchases ?? 0}+ purchased</span>
          </div>

          <h2 className="view-price">₹{product.price}</h2>

          <p className="view-description">
            High-quality {categoryName.toLowerCase().includes("polaroid") ? "polaroid " : "wall poster "}
            designed to add a unique style to your space.
          </p>

          <div className="view-divider"></div>

          <div className="view-info">
            <p><strong>Product:</strong> {product.name}</p>
            <p><strong>Rating:</strong> {product.rating ?? "—"} / 5</p>
            <p><strong>Purchased:</strong> {product.purchases ?? 0}+</p>
            <p><strong>Added:</strong> {product.dateAdded || product.createdAt || "—"}</p>
          </div>

          <button className="add-cart-btn" onClick={handleAddToCart} disabled={!cartReady}>
            {added ? "Added to Cart!" : "Add to Cart"}
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
