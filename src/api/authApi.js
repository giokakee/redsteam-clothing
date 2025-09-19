// src/api/authApi.js
import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => axiosClient.post("/login", data),
  register: (data) =>
    axiosClient.post("/register", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default authApi;
