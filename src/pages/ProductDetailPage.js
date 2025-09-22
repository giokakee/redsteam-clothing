import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import axiosClient from "../api/axiosClient";
import ProductGallery from "../components/productDetails/ProductGallery";
import ProductInfo from "../components/productDetails/ProductInfo";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosClient.get(`/products/${id}`);
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page-container">
      <p className="listing-title">Listing / Product</p>
      <div className="product-details-page">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
