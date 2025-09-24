import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import axiosClient from "../api/axiosClient";
import ProductGallery from "../components/productDetails/ProductGallery";
import ProductInfo from "../components/productDetails/ProductInfo";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosClient.get(`/products/${id}`);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <Navigate to="/" />;
  if (!product) return <p>Loading...</p>;
  return (
    <div className="product-details-page-container">
      <p className="listing-title">Listing / Product</p>
      <div className="product-details-page">
        <ProductGallery
          images={product.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <ProductInfo
          product={product}
          colors={product.available_colors}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
