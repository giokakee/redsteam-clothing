import React, { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCart";

const ProductInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(
    product.available_colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  console.log(selectedColor);

  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>

      <ColorSelector
        colors={product.available_colors}
        selected={selectedColor}
        onSelect={setSelectedColor}
      />

      <SizeSelector
        sizes={product.available_sizes}
        selected={selectedSize}
        onSelect={setSelectedSize}
      />

      <QuantitySelector value={quantity} onChange={setQuantity} />

      <AddToCartButton
        product={product}
        color={selectedColor}
        size={selectedSize}
        quantity={quantity}
      />

      <div className="product-details">
        <h3>Details</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );

  return <div>aee</div>;
};

export default ProductInfo;
