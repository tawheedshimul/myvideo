import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          onClick={handleSearch}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-6-6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 7a5 5 0 015 5m0 0h-1m-4 0H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2h-1"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-4 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
