import React from "react";

const ColorSelector = ({ colors, selected, onSelect }) => (
  <div className="color-selector">
    <p>Color:</p>
    <div className="color-options">
      {colors.map((color, idx) => (
        <span
          key={idx}
          className={`color-circle ${selected === color ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  </div>
);

export default ColorSelector;
