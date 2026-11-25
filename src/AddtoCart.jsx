import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  changeQuantity,
  removeFromCart,
  selectCartItems,
} from "./features/cart/cartSlice";
import { getProductImageUrl } from "./utils/productImage";

function AddtoCart() {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>

      <div className="cart-page">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <span className="cart-count">{totalItems} {totalItems === 1 ? "Item" : "Items"}</span>
        </div>

        <div className="cart-container">
          {/* Cart Items Section */}
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart" style={{ padding: "2rem 0" }}>
                <p>Your cart is empty.</p>
                <Link to="/WallPosters" style={{ color: "#333", textDecoration: "underline" }}>
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={String(item.id)}>
                  <div className="cart-item-image">
                    <img
                      src={getProductImageUrl(item.image, item.categoryName)}
                      alt={item.name}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/logo512.png";
                      }}
                    />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <span className="cart-item-type">
                          {item.categoryName?.toLowerCase().includes("polaroid") ? "POLAROID" : "POSTER"}
                        </span>
                        <h3>{item.name}</h3>
                      </div>

                      <button
                        className="cart-remove"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>

                    <p className="cart-item-price">₹{item.price * item.quantity}</p>

                    {/* Quantity */}
                    <div className="cart-quantity">
                      <button onClick={() => dispatch(changeQuantity({ id: item.id, amount: -1 }))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(changeQuantity({ id: item.id, amount: 1 }))}>+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{subtotal}</strong>
            </div>

            <button className="checkout-btn" disabled={cart.length === 0}>
              Proceed to Checkout
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <p className="secure-text">
              <i className="fa-solid fa-lock"></i>
              Secure Checkout
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddtoCart;
