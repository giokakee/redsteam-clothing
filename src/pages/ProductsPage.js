import "./ProductsPage.css";
import { useEffect, useState } from "react";
import productApi from "../api/productApi";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import FilterSortBar from "../components/filters/FilterSortBar";
import { RiDeleteBack2Line } from "react-icons/ri";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const priceFrom = searchParams.get("filter[price_from]") || "";
  const priceTo = searchParams.get("filter[price_to]") || "";
  const newParams = new URLSearchParams(searchParams);

  const paramsObj = Object.fromEntries(searchParams.entries());

  console.log(paramsObj);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="products-page-container">
      <div className="products-page">
        <div className="products-header">
          <h2 className="products-title">Products</h2>
          <FilterSortBar totalItems={totalItems} />
        </div>

        {(priceFrom || priceTo) && (
          <div className="price-filter">
            <p>
              Price: {priceFrom && `${!priceTo && "From"}  ${priceFrom}`}{" "}
              {priceTo && `${!priceFrom && "0"} - ${priceTo}`}
            </p>
            <RiDeleteBack2Line
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => {
                newParams.delete("filter[price_from]");
                newParams.delete("filter[price_to]");
                setSearchParams(newParams);
              }}
            />
          </div>
        )}

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
