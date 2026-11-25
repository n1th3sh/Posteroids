import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const getCategoryName = (product) => {
  if (typeof product.category === "string") return product.category;
  return product.category?.name || product.categoryName || "Uncategorized";
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (product?.id == null) return;

      const id = String(product.id);
      const existingItem = state.items.find((item) => String(item.id) === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          id,
          categoryName: getCategoryName(product),
          quantity: 1,
        });
      }
    },
    changeQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((entry) => String(entry.id) === String(id));
      if (!item) return;

      item.quantity += amount;
      if (item.quantity <= 0) {
        state.items = state.items.filter((entry) => String(entry.id) !== String(id));
      }
    },
    removeFromCart: (state, action) => {
      const id = String(action.payload);
      state.items = state.items.filter((item) => String(item.id) !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;
