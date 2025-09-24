import axiosClient from "./axiosClient";

const cartApi = {
  getAll: () => axiosClient.get("/cart"),
  addToCart: ({ id, data }) => axiosClient.post(`/cart/products/${id}`, data),
  updateQuantity: ({ id, quantity }) => {
    return axiosClient.patch(`/cart/products/${id}`, { quantity });
  },

  removeFromCart: (id) => axiosClient.delete(`/cart/products/${id}`),
  checkout: ({ data }) => {
    return axiosClient.post("/cart/checkout", data);
  },
};

export default cartApi;
