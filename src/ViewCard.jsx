import { useParams } from "react-router";
import useFetch from "./useFetch";



function ViewCard(){

    const {id , type} = useParams();

    const [ViewProductCard, error]=useFetch("http://localhost:3000/" + type + "/" + id);

    if(!ViewProductCard){
    return(
      <>
       <div className="status-container">
        {!error && (
            <img 
            src="/ekkant-circle-20050_512.gif" 
            alt="Loading" 
            className="loader-image" 
            />
        )}

        {error && (
            <div className="error-card">
            <h3 className="error-message">{error}</h3>
            </div>
        )}
        </div>
      </>
    )
  }
    

    return (
    <div className="view-page">

      <div className="view-container">

        {/* Product Image */}
        <div className="view-image-section">
          <img
            className="view-product-image"
            src={ViewProductCard.image}
            alt={ViewProductCard.name}
          />
        </div>


        {/* Product Details */}
        <div className="view-details">

          <p className="view-type">
            {type === "Polaroids" ? "POLAROID" : "WALL POSTER"}
          </p>

          <h1 className="view-product-name">
            {ViewProductCard.name}
          </h1>

          <div className="view-rating">
            <span>
              ★ {ViewProductCard.rating}
            </span>

            <span>
              {ViewProductCard.purchases}+ purchased
            </span>
          </div>

          <h2 className="view-price">
            ₹{ViewProductCard.price}
          </h2>

          <p className="view-description">
            High-quality {type === "Polaroids" ? "polaroid " : "wall poster "}
            designed to add a unique style to your space.
          </p>

          <div className="view-divider"></div>

          <div className="view-info">
            <p>
              <strong>Product:</strong> {ViewProductCard.name}
            </p>

            <p>
              <strong>Rating:</strong> {ViewProductCard.rating} / 5
            </p>

            <p>
              <strong>Purchased:</strong>{" "}
              {ViewProductCard.purchases}+
            </p>

            <p>
              <strong>Added:</strong>{" "}
              {ViewProductCard.dateAdded}
            </p>
          </div>

          <button className="add-cart-btn">
            Add to Cart
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ViewCard;