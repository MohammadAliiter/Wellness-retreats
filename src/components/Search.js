import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center p-4 bg-gray-200">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title"
        className="p-2 rounded border flex-1 mr-4"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
