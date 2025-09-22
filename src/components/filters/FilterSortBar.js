import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PriceFilterModal from "./PriceFilter";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import "./FilterSortBar.css";
import SortDropdown from "./SortFilter";

const FilterSortBar = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortingIsOpen, setSortingIsOpen] = useState(false);

  const priceFrom = searchParams.get("filter[price_from]") || "";
  const priceTo = searchParams.get("filter[price_to]") || "";

  const openPriceFilter = () => setIsModalOpen(true);

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <>
      <div className="filter-sort-bar">
        <div className="results-count">
          Showing {startItem}-{endItem} of {totalItems} results
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <div
              type="button"
              onClick={openPriceFilter}
              className="filter-button"
              style={{
                fontWeight: priceFrom || priceTo ? "bold" : "normal",
                borderColor: priceFrom || priceTo ? "#007bff" : "#ced4da",
              }}
            >
              <HiAdjustmentsHorizontal size={24} color="#0F172A" />
              <p>Filter {(priceFrom || priceTo) && "✓"}</p>
            </div>
          </div>

          <PriceFilterModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <div className="filter-group">
            <SortDropdown open={sortingIsOpen} setOpen={setSortingIsOpen} />
          </div>
        </div>
      </div>

      <div
        className="overlay"
        onClick={() => setIsModalOpen(false)}
        style={{ display: isModalOpen ? "block" : "none" }}
      ></div>

      <div
        className="overlay"
        onClick={() => setSortingIsOpen(false)}
        style={{ display: sortingIsOpen ? "block" : "none" }}
      ></div>
    </>
  );
};

export default FilterSortBar;
