import { useMemo } from 'react';
import { Transaction } from '../models/Transaction';
import { parseDate } from '../utils/parseDate';
import { isWithinInterval, endOfDay } from 'date-fns';

interface UseFilteredTransactionsProps {
  transactions: Transaction[];
  startDate: string;
  endDate: string;
}

export const useFilteredTransactions = ({
  transactions,
  startDate,
  endDate,
}: UseFilteredTransactionsProps) => {
  const filteredTransactions = useMemo(() => {
    if (!startDate || !endDate) {
      return transactions;
    }

    const startDateObj = parseDate(startDate);
    const endDateObj = endOfDay(parseDate(endDate));

    return transactions.filter((transaction) => {
      const transactionDate = parseDate(transaction.date);
      return isWithinInterval(transactionDate, {
        start: startDateObj,
        end: endDateObj,
      });
    });
  }, [transactions, startDate, endDate]);

  return filteredTransactions;
};
