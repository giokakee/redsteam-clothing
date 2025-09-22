import "./ProductsPage.css";
import { useEffect, useState } from "react";
import productApi from "../api/productApi";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import FilterSortBar from "../components/filters/FilterSortBar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const paramsObject = Object.fromEntries([...searchParams]);

        const res = await productApi.getAll(paramsObject);
        setProducts(res.data.data);
        setTotalPages(res.data.meta.last_page);

        setTotalItems(res.data.meta.total);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchParams]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="products-page-container">
      <div className="products-page">
        <div className="products-header">
          <h2 className="products-title">Products</h2>
          <FilterSortBar totalItems={totalItems} />
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <img
                src={product.cover_image}
                alt={product.name}
                className="product-image"
              />
              <h4 className="product-name">{product.name}</h4>
              <p className="product-price">${product.price}</p>
            </Link>
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ProductsPage;
