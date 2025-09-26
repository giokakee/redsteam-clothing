import React from "react";

const QuantitySelector = ({ value, onChange }) => (
  <div className="quantity-selector">
    <p>Quantity</p>
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      {[1, 2, 3, 4, 5].map((q) => (
        <option key={q} value={q}>
          {q}
        </option>
      ))}
    </select>
  </div>
);

export default QuantitySelector;
