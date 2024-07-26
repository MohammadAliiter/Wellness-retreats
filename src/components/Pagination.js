import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 bg-blue-600 text-white rounded mx-2"
      >
        Previous
      </button>
      <span className="mx-2">Page {currentPage} of {totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 bg-blue-600 text-white rounded mx-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
