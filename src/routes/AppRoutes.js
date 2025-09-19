import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import TestPage from "../pages/testPage";

// const token = "60|0dGHf0KSXxsAVQMLCzowB5UDiToaf7HfRLDGZ9OOab6e125a";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
