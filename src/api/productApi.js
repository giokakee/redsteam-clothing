import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => axiosClient.get("/products", { params }),
  getOne: (id) => axiosClient.get(`/products/${id}`),
};

export default productApi;
