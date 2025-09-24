import React from "react";

const SizeSelector = ({ sizes, selected, onSelect }) => (
  <div className="size-selector">
    <p className="size-label"> Size: {selected}</p>
    <div className="size-options">
      {sizes &&
        sizes.map((size, idx) => (
          <button
            key={idx}
            className={`size-btn ${selected === size ? "active" : ""}`}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
    </div>
  </div>
);

export default SizeSelector;
