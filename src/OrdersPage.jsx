import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "./auth/AuthContext";
import { getOrders } from "./services/storefrontApi";

const money = (value, currency) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: currency || "INR", maximumFractionDigits: 2,
}).format(Number(value) || 0);

function OrdersPage() {
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setOrders([]);
      return undefined;
    }
    let cancelled = false;
    setLoading(true);
    getOrders(token)
      .then((result) => { if (!cancelled) setOrders(result); })
      .catch((requestError) => { if (!cancelled) setError(requestError.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [token]);

  if (!token) {
    return <main className="cart-page"><h1>Your Orders</h1><p>Sign in to view your order history.</p>
      <button className="checkout-btn" type="button" onClick={() => navigate("/login", { state: { from: "/orders" } })}>Sign in</button></main>;
  }

  return (
    <div>
      <main className="cart-page orders-page">
        <div className="cart-header"><div><h1>Your Orders</h1><p>Signed in as {user?.email}</p></div><Link to="/AddtoCart">Back to cart</Link></div>
        {loading && <p role="status">Loading your orders…</p>}
        {error && <p className="auth-error" role="alert">{error}</p>}
        {!loading && !error && orders.length === 0 && (
          <div className="empty-cart"><p>You have not placed any orders yet.</p><Link to="/WallPosters">Browse the collection</Link></div>
        )}
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div className="order-card-header">
                <div><h2>Order {order.id}</h2><p>{new Date(order.createdAt).toLocaleString()}</p></div>
                <span className="order-status">{order.status}</span>
              </div>
              <div className="order-card-items">
                {order.items.map((item, index) => (
                  <div className="order-card-item" key={`${order.id}-${index}`}>
                    <span>{item.quantity} × {item.name}</span>
                    <span>{money(item.lineTotal, order.currency)}</span>
                  </div>
                ))}
              </div>
              <div className="order-card-total"><span>Order total</span><strong>{money(order.total, order.currency)}</strong></div>
              <p className="order-shipping">Ship to {order.shippingName}, {order.addressLine1}, {order.city}, {order.region} {order.postalCode}, {order.countryCode}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OrdersPage;
