import { useState } from 'react';

type PaginationHook = {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  setTotalPages: (pages: number) => void;
};

export const usePagination = (): PaginationHook => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return { currentPage, totalPages, goToNextPage, goToPreviousPage, setTotalPages };
};