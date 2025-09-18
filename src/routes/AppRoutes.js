import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import { useEffect } from "react";
import axios from "axios";

const token = "60|0dGHf0KSXxsAVQMLCzowB5UDiToaf7HfRLDGZ9OOab6e125a";

export default function AppRoutes() {
  //   useEffect(() => {
  //     // Simulate storing a token in localStorage
  //     const getData = async () => {
  //       try {
  //         const res = await fetch(
  //           "https://api.redseam.redberryinternship.ge/api/products"
  //         );

  //         const response = await axios.get(
  //           "https://api.redseam.redberryinternship.ge/api/products",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //       } catch (err) {
  //         console.log(err, " errorrrr");
  //       }
  //     };

  //     getData();
  //   }, []);

  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
