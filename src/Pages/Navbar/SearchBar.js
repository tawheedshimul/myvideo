import React, { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const ExpandableSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    setSearchValue('');
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(false);
        setSearchValue('');
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add('search-expanded');
    } else {
      document.body.classList.remove('search-expanded');
    }
  }, [isExpanded]);

  return (
    <div className="relative">
      <button
        className="p-2 text-red-600 bg-white rounded hover:text-gray-700 focus:outline-none"
        onClick={handleToggleExpand}
      >
        {isExpanded ? <FiX size={20} /> : <FiSearch size={20} />}
      </button>
      {isExpanded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <button className='fixed top-0 text-white bg-red-500 py-4 px-8 rounded font-bold' onClick={handleToggleExpand}>CLose SearchPage<FiX size={16} /></button>
          <div className="container w-full relative">
            {/* <button
              className="absolute top-1 right-1 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"

            >

            </button> */}
            <input
              type="text"
              className="container w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 placeholder-gray-400 placeholder-opacity-75 transition-all duration-300"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
            {searchValue && (
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                onClick={handleClearSearch}
              >
                <FiX size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableSearchBar;
