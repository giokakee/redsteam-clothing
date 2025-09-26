import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addOrUpdateCart } from "../../features/cart/cartThunk";

const AddToCartButton = ({ product, color, size, quantity }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addOrUpdateCart({
        id: product.id,
        data: { quantity, color: product.available_colors[color], size },
      })
    );
  };

  if (!product) return null;

  return (
    <button
      className={`add-to-cart-btn ${!size && "disabled-btn"} `}
      onClick={handleAddToCart}
    >
      <AiOutlineShoppingCart size={30} /> Add to cart
    </button>
  );
};

export default AddToCartButton;
