import { useState } from "react";
import "./PriceFilter.css";
import { FaAsterisk } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const PriceFilterModal = ({ isOpen, onClose, onApply }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const priceFrom = searchParams.get("filter[price_from]") || "";
  const priceTo = searchParams.get("filter[price_to]") || "";

  const [minPrice, setMinPrice] = useState(priceFrom || "");
  const [maxPrice, setMaxPrice] = useState(priceTo || "");
  const [minFocused, setMinFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);

  const applyPriceFilter = (newMinPrice, newMaxPrice) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");

    if (newMinPrice) {
      newParams.set("filter[price_from]", newMinPrice);
    } else {
      newParams.delete("filter[price_from]");
    }

    // Set or delete the max price parameter
    if (newMaxPrice) {
      newParams.set("filter[price_to]", newMaxPrice);
    } else {
      newParams.delete("filter[price_to]");
    }

    setSearchParams(newParams);
  };

  const handleApply = () => {
    applyPriceFilter(minPrice, maxPrice);
    onClose();
  };

  const handleClose = () => {
    setMinPrice(priceFrom || "");
    setMaxPrice(priceTo || "");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <p className="modal-title">Select price</p>

      <div className="modal-inputs-container">
        <div className="modal-input-group">
          <label
            htmlFor="modalPriceFrom"
            style={{ display: minFocused || minPrice ? "none" : "block" }}
          >
            From <FaAsterisk color="#FF4000" size={7} className="asterisk" />
          </label>
          <input
            id="modalPriceFrom"
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onFocus={() => setMinFocused(true)}
            onBlur={() => setMinFocused(false)}
          />
        </div>

        <div className="modal-input-group">
          <label
            htmlFor="modalPriceTo"
            style={{ display: maxFocused || maxPrice ? "none" : "block" }}
          >
            To <FaAsterisk color="#FF4000" size={7} className="asterisk" />
          </label>
          <input
            id="modalPriceTo"
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onFocus={() => setMaxFocused(true)}
            onBlur={() => setMaxFocused(false)}
          />
        </div>
      </div>

      <div className="modal-actions">
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="button" onClick={handleApply} className="btn-primary">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PriceFilterModal;
