import React, { useState, useMemo } from 'react';
import { Transaction } from '../models/Transaction';
import PaginationComponent from './PaginationComponent';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const transactionsPerPage = 5;

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const currentTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    return transactions.slice(startIndex, endIndex);
  }, [transactions, currentPage, transactionsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (transactions.length === 0) {
    return <p>No transactions found for the selected date range.</p>;
  }

  console.log(transactions)

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {currentTransactions.map((transaction) => (
          <li key={transaction.id}>
            <p>ID: {transaction.id}</p>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: ${transaction.amount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default React.memo(TransactionList);
