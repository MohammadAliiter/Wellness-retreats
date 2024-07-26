import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Retreat from './components/Retreat';
import Filter from './components/Filter';
import Search from './components/Search';
import Pagination from './components/Pagination';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRetreats();
  }, [page]);

  const fetchRetreats = async () => {
    const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=3`);
    const data = await response.json();
    setRetreats(data);
    setFilteredRetreats(data);
    setTotalPages(5); 
  };

  const handleFilterChange = ({ dateRange, type }) => {
    let filtered = retreats;

    if (dateRange) {
      const [startYear, endYear] = dateRange.split('-');
      filtered = filtered.filter(retreat => {
        const retreatYear = new Date(retreat.date).getFullYear();
        return retreatYear >= startYear && retreatYear <= endYear;
      });
    }

    if (type) {
      filtered = filtered.filter(retreat => retreat.type === type);
    }

    setFilteredRetreats(filtered);
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    let searchResults = retreats;

    if (query) {
      searchResults = retreats.filter(retreat =>
        retreat.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredRetreats(searchResults);
  }, [query, retreats]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Filter onFilterChange={handleFilterChange} />
      <Search onSearch={handleSearch} />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredRetreats.map(retreat => (
          <Retreat key={retreat.id} retreat={retreat} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      <div className='flex justify-center'>
  <p>© 2024 Wellness Retreat | All Rights Reserved</p>
</div>

    </div>
  );
};

export default App;
