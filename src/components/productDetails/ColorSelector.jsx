import React from "react";

const ColorSelector = ({ colors, selectedImage, setSelectedImage }) => (
  <div className="color-selector">
    <p className="color-label">Color: {colors[selectedImage]} </p>
    <div className="color-options">
      {colors.map((color, idx) => (
        <span
          key={idx}
          className={`color-circle ${selectedImage === idx ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedImage(idx)}
        />
      ))}
    </div>
  </div>
);

export default ColorSelector;
