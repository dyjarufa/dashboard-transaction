import { useState, useEffect } from 'react';
import { Transaction } from '../models/Transaction';
import { fetchTransactions } from '../service/fetchTransactions';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError('Failed to load transactions.');
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, []);

  return { transactions, loading, error };
};
