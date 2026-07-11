import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <div className="flex pt-6 justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded border text-sm hover:bg-gray-200 ${
            page === currentPage ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
