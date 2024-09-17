import React from 'react';
import { Transaction } from '../models/Transaction';

interface SummaryProps {
  transactions: Transaction[];
}

const SummaryComponent: React.FC<SummaryProps> = ({ transactions }) => {
  const totalAmount = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Transactions: {transactions.length}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default React.memo(SummaryComponent);
