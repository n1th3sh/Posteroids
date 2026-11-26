import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "./auth/AuthContext";
import { useCart } from "./features/cart/CartProvider";
import { getProductImageUrl } from "./utils/productImage";

const money = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 2,
}).format(Number(value) || 0);

function AddtoCart() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, subtotal, ready, error, clearError, setQuantity, removeProduct, submitOrder } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [placedOrder, setPlacedOrder] = useState(null);
  const [address, setAddress] = useState({
    name: user?.name || "", phone: "", addressLine1: "", addressLine2: "",
    city: "", region: "", postalCode: "", countryCode: "IN",
  });
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const updateAddress = (event) => setAddress((current) => ({ ...current, [event.target.name]: event.target.value }));
  const updateQuantity = (productId, quantity) => { setQuantity(productId, quantity).catch(() => {}); };
  const removeItem = (productId) => { removeProduct(productId).catch(() => {}); };

  async function handleOrderSubmit(event) {
    event.preventDefault();
    setOrderError("");
    setSubmitting(true);
    try {
      setPlacedOrder(await submitOrder(address));
      setCheckoutOpen(false);
    } catch (requestError) {
      setOrderError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <main className="cart-page">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <span className="cart-count">{totalItems} {totalItems === 1 ? "Item" : "Items"}</span>
        </div>

        {placedOrder && (
          <div className="auth-success" role="status">
            Order placed: <strong>{placedOrder.id}</strong>. Status: {placedOrder.status.toLowerCase()}.
            {" "}<Link to="/orders">View your orders</Link>
          </div>
        )}
        {!ready && <p role="status">Loading your cart…</p>}
        {(error || orderError) && <p className="auth-error" role="alert">{orderError || error}</p>}
        {error && <button className="auth-text-button" type="button" onClick={clearError}>Dismiss</button>}

        <div className="cart-container">
          <section className="cart-items" aria-label="Cart items">
            {ready && items.length === 0 ? (
              <div className="empty-cart" style={{ padding: "2rem 0" }}>
                <p>Your cart is empty.</p>
                <Link to="/WallPosters" style={{ color: "#333", textDecoration: "underline" }}>Continue Shopping</Link>
              </div>
            ) : items.map((item) => (
              <article className="cart-item" key={String(item.productId || item.id)}>
                <div className="cart-item-image">
                  <img src={getProductImageUrl(item.image, item.categoryName)} alt={item.name}
                    onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/logo512.png"; }} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <div>
                      <span className="cart-item-type">{item.categoryName?.toLowerCase().includes("polaroid") ? "POLAROID" : "POSTER"}</span>
                      <h3>{item.name}</h3>
                      <span>{money(item.price)} each</span>
                    </div>
                    <button className="cart-remove" type="button" aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.productId || item.id)}>
                      <i className="fa-solid fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                  <p className="cart-item-price">{money(item.price * item.quantity)}</p>
                  <div className="cart-quantity" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" aria-label="Decrease quantity" disabled={item.quantity <= 1 || !ready}
                      onClick={() => updateQuantity(item.productId || item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label="Increase quantity" disabled={item.quantity >= 99 || !ready}
                      onClick={() => updateQuantity(item.productId || item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>FREE</span></div>
            <hr />
            <div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div>
            {!checkoutOpen ? (
              <button className="checkout-btn" type="button" disabled={!items.length || !ready}
                onClick={() => user ? setCheckoutOpen(true) : navigate("/login", { state: { from: "/AddtoCart" } })}>
                {user ? "Proceed to Checkout" : "Sign in to Checkout"}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>
            ) : (
              <form className="auth-form checkout-form" onSubmit={handleOrderSubmit}>
                <h3>Shipping details</h3>
                <label htmlFor="shipping-name">Full name</label>
                <input id="shipping-name" name="name" autoComplete="name" maxLength={100} required value={address.name} onChange={updateAddress} />
                <label htmlFor="shipping-phone">Phone</label>
                <input id="shipping-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} required value={address.phone} onChange={updateAddress} />
                <label htmlFor="shipping-address1">Address</label>
                <input id="shipping-address1" name="addressLine1" autoComplete="address-line1" maxLength={200} required value={address.addressLine1} onChange={updateAddress} />
                <label htmlFor="shipping-address2">Apartment, suite (optional)</label>
                <input id="shipping-address2" name="addressLine2" autoComplete="address-line2" maxLength={200} value={address.addressLine2} onChange={updateAddress} />
                <label htmlFor="shipping-city">City</label>
                <input id="shipping-city" name="city" autoComplete="address-level2" maxLength={100} required value={address.city} onChange={updateAddress} />
                <label htmlFor="shipping-region">State or region</label>
                <input id="shipping-region" name="region" autoComplete="address-level1" maxLength={100} required value={address.region} onChange={updateAddress} />
                <label htmlFor="shipping-postal">Postal code</label>
                <input id="shipping-postal" name="postalCode" autoComplete="postal-code" maxLength={20} required value={address.postalCode} onChange={updateAddress} />
                <label htmlFor="shipping-country">Country code</label>
                <input id="shipping-country" name="countryCode" autoComplete="country" pattern="[A-Za-z]{2}" maxLength={2} required value={address.countryCode} onChange={updateAddress} />
                {orderError && <p className="auth-error" role="alert">{orderError}</p>}
                <button className="checkout-btn" type="submit" disabled={submitting || !ready}>
                  {submitting ? "Placing order…" : `Place order · ${money(subtotal)}`}
                </button>
                <button className="auth-text-button" type="button" onClick={() => setCheckoutOpen(false)}>Back to cart</button>
              </form>
            )}
            <p className="secure-text"><i className="fa-solid fa-lock" aria-hidden="true"></i> Order confirmation only; payment is not collected here.</p>
            {user && <Link to="/orders">View order history</Link>}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AddtoCart;
