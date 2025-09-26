import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";
import TestPage from "../pages/testPage";
import ProtectedLayout from "../layouts/ProtectedLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/products" replace />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
