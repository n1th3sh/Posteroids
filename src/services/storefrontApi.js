import { API_BASE_URL } from "../apiBaseUrl";

async function storefrontRequest(path, token, { method = "GET", body } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.detail || payload.message || payload.title || "The store could not complete this request.");
  }
  return payload;
}

export const getCart = (token) => storefrontRequest("/cart", token);
export const setCartItem = (token, productId, quantity) =>
  storefrontRequest(`/cart/items/${encodeURIComponent(productId)}`, token, {
    method: "PUT",
    body: { quantity },
  });
export const deleteCartItem = (token, productId) =>
  storefrontRequest(`/cart/items/${encodeURIComponent(productId)}`, token, { method: "DELETE" });
export const placeOrder = (token, shippingAddress) =>
  storefrontRequest("/orders", token, { method: "POST", body: shippingAddress });
export const getOrders = (token) => storefrontRequest("/orders", token);
export const getOrder = (token, orderId) =>
  storefrontRequest(`/orders/${encodeURIComponent(orderId)}`, token);
