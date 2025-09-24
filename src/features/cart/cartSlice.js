import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  checkoutCart,
} from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const { id, quantity } = action.payload; // make sure payload has both
        const index = state.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.items[index].quantity = quantity; // ✅ update just quantity
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(checkoutCart.fulfilled, (state, action) => {
        state.items = []; // empty cart on success
      });
  },
});

export default cartSlice.reducer;
