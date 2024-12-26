import React from 'react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, totalPages }) => {
  return (
    <div className="pagination-container mt-4 flex justify-center items-center">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage <= 1 ? 'cursor-not-allowed bg-gray-300' : 'hover:bg-gray-200'
        }`}
      >
        Previous
      </button>
      <span className="mx-2">Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage >= totalPages ? 'cursor-not-allowed bg-gray-300' : 'hover:bg-gray-200'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
