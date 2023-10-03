import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className='pagination'>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
