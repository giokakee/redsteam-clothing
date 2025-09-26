import React from "react";

const ProductGallery = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="product-gallery">
      <div className="thumbnails">
        {images.map((img, idx) => {
          return (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={`thumbnail ${selectedImage === idx ? "active" : ""}`}
              onClick={() => setSelectedImage(idx)}
            />
          );
        })}
      </div>
      <div className="main-image">
        <img src={images[selectedImage]} alt="selected product" />
      </div>
    </div>
  );
};

export default ProductGallery;
