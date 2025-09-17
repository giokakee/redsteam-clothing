import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
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
