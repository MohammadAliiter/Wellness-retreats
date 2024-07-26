import React, { useState ,useEffect } from 'react';

const Filter = ({ onFilterChange }) => {
  const [type, setType] = useState('');
  const [dateRange, setDateRange] = useState('');

  useEffect(() => {
    onFilterChange({ dateRange, type });
  }, [dateRange, type, onFilterChange]);

  return (
    <div className="flex items-center p-4 bg-gray-200">

<select
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        className="p-2 rounded border bg-blue-600 text-white ml-4"
      >
        <option value="">Filter by date</option>
        <option value="2022-2023">2022-2023</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 rounded border bg-blue-600 text-white"
      >
        <option value="">Filter by type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>

    </div>
  );
};

export default Filter;
