import { Link } from "react-router-dom";
import { getProductCategoryName } from "./utils/product";
import { getProductImageUrl } from "./utils/productImage";

function ProductCard({ product }) {
  const category = getProductCategoryName(product);
  const destination = `/ViewCard/${encodeURIComponent(category)}/${encodeURIComponent(String(product.id))}`;

  return (
    <Link className="product-card" to={destination} aria-label={`View ${product.name}`}>
      <div className="product-card-image-box">
        <img
          className="product-card-image"
          src={getProductImageUrl(product.image, category)}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/logo512.png";
          }}
        />

        <span className="product-card-price">₹{product.price}</span>
        <div className="product-card-glass-panel">
          <div className="product-card-glass-copy">
            <span className="product-card-category">{category}</span>
            <h3>{product.name}</h3>
            <p>
              <span><i className="fa-solid fa-star" aria-hidden="true"></i> {product.rating ?? '—'}</span>
              <span className="product-card-detail-divider" aria-hidden="true">·</span>
              <span>{product.purchases ?? 0}+ purchased</span>
            </p>
          </div>
          <span className="product-card-view" aria-hidden="true">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
