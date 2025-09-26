import "./Pagination.css";
import { Link, useSearchParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages }) => {
  const [searchParams] = useSearchParams();
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const getPageUrl = (pageNum) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", pageNum);
    return `?${newParams.toString()}`;
  };

  return (
    <nav aria-label="Product pagination" className="pagination">
      <Link
        to={getPageUrl(currentPage - 1)}
        className={`pagination__link pagination__link--prev ${
          currentPage === 1 ? "pagination__link--disabled" : ""
        }`}
        aria-label="Go to previous page"
        onClick={(e) => currentPage === 1 && e.preventDefault()}
      >
        <FaAngleLeft />
      </Link>

      {startPage > 1 && (
        <>
          <Link to={getPageUrl(1)} className="pagination__link">
            1
          </Link>
          {startPage > 2 && <span className="pagination__ellipsis">...</span>}
        </>
      )}

      {pageNumbers.map((pageNum) => (
        <Link
          key={pageNum}
          to={getPageUrl(pageNum)}
          className={`pagination__link ${
            pageNum === currentPage ? "pagination__link--active" : ""
          }`}
          aria-label={`Go to page ${pageNum}`}
          aria-current={pageNum === currentPage ? "page" : undefined}
        >
          {pageNum}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="pagination__ellipsis">...</span>
          )}
          <Link to={getPageUrl(totalPages)} className="pagination__link">
            {totalPages}
          </Link>
        </>
      )}

      <Link
        to={getPageUrl(currentPage + 1)}
        className={`pagination__link pagination__link--next ${
          currentPage === totalPages ? "pagination__link--disabled" : ""
        }`}
        aria-label="Go to next page"
        onClick={(e) => currentPage === totalPages && e.preventDefault()}
      >
        <FaAngleRight />
      </Link>
    </nav>
  );
};

export default Pagination;
