import { useState } from "react";
import "./SortFilter.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const SortDropdown = ({ open, setOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "";

  const handleChange = (newSortValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");

    if (newSortValue) {
      newParams.set("sort", newSortValue);
    } else {
      newParams.delete("sort");
    }

    setSearchParams(newParams);
    setOpen(false);
  };

  const options = [
    { value: "", label: "Sort by" },
    { value: "price", label: "Price, Low to High" },
    { value: "-price", label: "Price, High to Low" },
    { value: "created_at", label: "Newest" },
    { value: "-created_at", label: "Oldest" },
  ];

  return (
    <div className="sort-select">
      <button
        id="sort"
        className="sort-select-toggle"
        onClick={() => setOpen(!open)}
      >
        {options.find((opt) => opt.value === sortBy)?.label || "Sort by"}
        <span className="arrow">
          {open ? (
            <MdKeyboardArrowUp size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </span>
      </button>

      {open && (
        <ul className="sort-options">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`sort-option ${sortBy === opt.value ? "active" : ""}`}
              onClick={() => handleChange(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
