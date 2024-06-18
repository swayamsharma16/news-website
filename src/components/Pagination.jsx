import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pt-lg-3 pt-1">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <div
            href="/"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            aria-label="Previous"
          >
            <i className="bx bx-chevron-left mx-n1"></i>
          </div>
        </li>

        {/* Render page numbers dynamically */}
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${
              index + 1 === currentPage ? "active" : ""
            } d-none d-sm-block`}
          >
            <div
              href="/"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(index + 1);
              }}
            >
              {index + 1}
              {index + 1 === currentPage && (
                <span className="visually-hidden">(current)</span>
              )}
            </div>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            href="/"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            aria-label="Next"
          >
            <i className="bx bx-chevron-right mx-n1"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
