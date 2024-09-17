import React, { useState } from 'react';

interface FilterProps {
  onFilter: (startDate: string, endDate: string) => void;
}

const FilterComponent = ({ onFilter }: FilterProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Start Date Input:', startDate);
    console.log('End Date Input:', endDate);

    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    onFilter(startDate, endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default React.memo(FilterComponent);
