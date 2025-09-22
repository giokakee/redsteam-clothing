import React from "react";

const AddToCartButton = ({ product, color, size, quantity }) => {
  const handleAddToCart = () => {
    console.log("Adding to cart:", { product, color, size, quantity });
    // here dispatch cartThunk later
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      🛒 Add to cart
    </button>
  );
};

export default AddToCartButton;
