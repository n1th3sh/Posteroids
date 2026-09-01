import { useNavigate } from "react-router-dom";


function ProductCard({id, type, image, picName, Price, rating, purchases,dateAdded,onAddtoCart}) {

  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/ViewCard/${type}/${id}`)}
    >
      {/* Image */}
      <div className="product-card-image-box">

        <img
          className="product-card-image"
          src={image}
          alt={picName}
        />

        <span className="product-card-type">
          {type === "Polaroids" ? "POLAROID" : "POSTER"}
        </span>

        <div className="product-card-view">
          View <i className="fa-solid fa-arrow-right"></i>
        </div>

      </div>

      {/* Details */}
      <div className="product-card-content">

        <div className="product-card-heading">
          <h3>{picName}</h3>

          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>

        <div className="product-card-meta">

          <span className="product-card-rating">
            <i className="fa-solid fa-star"></i>
            {rating}
          </span>

          <span className="product-card-purchases">
            {purchases}+ purchased
          </span>

        </div>

        <div className="product-card-footer">
          <span className="product-card-price">
            ₹{Price}
          </span>

          <span className="product-card-explore">
            Explore
          </span>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;