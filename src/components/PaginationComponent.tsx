import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Navegação de página">
      <ul className="pagination">
        <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Página anterior"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item${currentPage === number ? ' active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item${currentPage === totalPages ? ' disabled' : ''
            }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Próxima página"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(PaginationComponent);
