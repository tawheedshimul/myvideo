import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import series from './Series.json';

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const handleFoodSearch = () => {
      if (searchTerm.trim() === '') {
        setSearchResults(series);
      } else {
        const filteredItems = series.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredItems);
      }
    };

    handleFoodSearch();
  }, [searchTerm]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search for a series..."
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-full sm:w-auto"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.slice(0, displayCount).map((result) => (
            <div key={result.videoId} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-1">{result.title}</h3>
              <p className="text-gray-600">{result.artist}</p>
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer url={result.youtubeLink} controls width="100%" height="100%" />
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {searchResults.length > displayCount && (
        <button
          onClick={handleSeeMore}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default FoodSearch;
