import React, { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCart";

const ProductInfo = ({ product, colors, selectedImage, setSelectedImage }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-info">
      <p className="product-name"> {product.name}</p>
      <p className="price">${product.price}</p>

      <ColorSelector
        colors={colors}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <SizeSelector
        sizes={product.available_sizes}
        selected={selectedSize}
        onSelect={setSelectedSize}
      />

      <QuantitySelector value={quantity} onChange={setQuantity} />

      <AddToCartButton
        product={product}
        color={selectedImage}
        size={selectedSize}
        quantity={quantity}
      />

      <div className="product-details">
        <div className="product-brand">
          <h3>Details</h3>
          <img src={product.brand.image} alt="brand" />
        </div>
        <p>Brand: {product.brand.name}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
