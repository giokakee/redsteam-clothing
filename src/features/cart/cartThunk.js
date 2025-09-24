import { createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";

// 1. Get cart items
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await cartApi.getAll();
      return data; // axiosClient already returns data
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error fetching cart");
    }
  }
);

// 2. Add product to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const { data: res } = await cartApi.addToCart({ id, data });
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error adding to cart");
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await cartApi.updateQuantity({ id, quantity });

      return data[0];
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error updating quantity");
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { rejectWithValue }) => {
    try {
      await cartApi.removeFromCart(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error removing from cart");
    }
  }
);

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async ({ data }, { rejectWithValue }) => {
    try {
      const res = await cartApi.checkout({ data });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error during checkout");
    }
  }
);
