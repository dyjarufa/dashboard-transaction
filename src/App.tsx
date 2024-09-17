import React, { useState, useCallback } from 'react';
import './App.css';
import FilterComponent from './components/FilterComponent';
import SummaryComponent from './components/SummaryComponent';
import TransactionList from './components/TransactionList';
import { useTransactions } from './hooks/useTransactions';
import { useFilteredTransactions } from './hooks/useFilteredTransactions';

function App() {
  const { transactions, loading, error } = useTransactions();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleFilter = useCallback((start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  }, []);

  const filteredTransactions = useFilteredTransactions({
    transactions,
    startDate,
    endDate,
  });

  if (loading) return <div>Carregando transações...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Payment Transactions Dashboard</h1>
      <FilterComponent onFilter={handleFilter} />
      <SummaryComponent transactions={filteredTransactions} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
