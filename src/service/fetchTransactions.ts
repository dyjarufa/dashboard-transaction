import { Transaction } from '../models/Transaction';
import transactionsData from '../data/transactions.json';

export const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomFail = Math.random() > 0.8;
      if (randomFail) {
        reject('Failed to fetch transactions.');
      } else {
        resolve(transactionsData as Transaction[]);
      }
    }, 1000);
  });
};
