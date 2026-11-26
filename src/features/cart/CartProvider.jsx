import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../auth/AuthContext";
import { addToCart, clearCart, selectCartItems } from "./cartSlice";
import { deleteCartItem, getCart, placeOrder, setCartItem } from "../../services/storefrontApi";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const dispatch = useDispatch();
  const guestItems = useSelector(selectCartItems);
  const { token, user } = useAuth();
  const [serverCart, setServerCart] = useState(null);
  const [ready, setReady] = useState(!token);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setServerCart(null);
      setReady(true);
      return undefined;
    }

    let cancelled = false;
    setReady(false);
    setError("");

    (async () => {
      let cart = await getCart(token);
      // Merge the guest cart into the account cart once the user signs in.
      const mergeKey = `posteroids.cart.merge.${user?.email || "account"}`;
      const mergedItems = JSON.parse(window.sessionStorage.getItem(mergeKey) || "{}");
      for (const item of guestItems) {
        const productId = item.productId || item.id;
        if (mergedItems[String(productId)] === item.quantity) continue;
        const current = cart.items.find((entry) => String(entry.productId) === String(productId));
        cart = await setCartItem(token, productId, Math.min(99, (current?.quantity || 0) + item.quantity));
        mergedItems[String(productId)] = item.quantity;
        window.sessionStorage.setItem(mergeKey, JSON.stringify(mergedItems));
      }
      if (cancelled) return;
      if (guestItems.length) {
        dispatch(clearCart());
        window.sessionStorage.removeItem(mergeKey);
      }
      setServerCart(cart);
      setReady(true);
    })().catch((requestError) => {
      if (!cancelled) {
        setError(requestError.message);
        setReady(true);
      }
    });

    return () => { cancelled = true; };
  }, [token, user?.email, dispatch, guestItems]);

  const runServerMutation = useCallback(async (action) => {
    setError("");
    try {
      const cart = await action();
      setServerCart(cart);
      return cart;
    } catch (requestError) {
      setError(requestError.message);
      throw requestError;
    }
  }, []);

  const addProduct = useCallback(async (product) => {
    if (!token) {
      dispatch(addToCart(product));
      return;
    }
    const productId = product.id;
    const current = serverCart?.items?.find((entry) => String(entry.productId) === String(productId));
    await runServerMutation(() => setCartItem(token, productId, Math.min(99, (current?.quantity || 0) + 1)));
  }, [token, serverCart, dispatch, runServerMutation]);

  const removeProduct = useCallback(async (productId) => {
    if (!token) {
      dispatch({ type: "cart/removeFromCart", payload: productId });
      return;
    }
    await runServerMutation(() => deleteCartItem(token, productId));
  }, [token, dispatch, runServerMutation]);

  const setQuantity = useCallback(async (productId, quantity) => {
    if (!token) {
      const item = guestItems.find((entry) => String(entry.id) === String(productId));
      if (!item) return;
      const delta = quantity - item.quantity;
      if (delta === 0) return;
      if (quantity < 1) dispatch({ type: "cart/removeFromCart", payload: productId });
      else {
        // Reuse the slice's bounded increment/decrement behavior for guest carts.
        for (let step = 0; step < Math.abs(delta); step += 1) {
          dispatch({ type: "cart/changeQuantity", payload: { id: productId, amount: Math.sign(delta) } });
        }
      }
      return;
    }
    if (quantity < 1) return removeProduct(productId);
    await runServerMutation(() => setCartItem(token, productId, Math.min(99, quantity)));
  }, [token, guestItems, dispatch, runServerMutation, removeProduct]);

  const submitOrder = useCallback((shippingAddress) => {
    if (!token) throw new Error("Sign in before placing your order.");
    return placeOrder(token, shippingAddress).then(async (order) => {
      setServerCart((current) => ({ ...current, items: [], subtotal: "0.00", currency: current?.currency || "INR" }));
      try {
        setServerCart(await getCart(token));
      } catch {
        // The order already exists; keep the cart visibly empty if refresh fails.
      }
      return order;
    });
  }, [token]);

  const items = token && serverCart
    ? (serverCart.items || []).map((item) => ({
      id: item.productId,
      productId: item.productId,
      name: item.name,
      image: item.image,
      categoryName: item.categoryName,
      price: Number(item.unitPrice),
      quantity: item.quantity,
    }))
    : guestItems;
  const subtotal = token && serverCart
    ? Number(serverCart?.subtotal || 0)
    : guestItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const value = useMemo(() => ({
    items,
    subtotal,
    currency: serverCart?.currency || "INR",
    ready,
    error,
    clearError: () => setError(""),
    addProduct,
    setQuantity,
    removeProduct,
    submitOrder,
  }), [items, subtotal, serverCart?.currency, ready, error, addProduct, setQuantity, removeProduct, submitOrder]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
