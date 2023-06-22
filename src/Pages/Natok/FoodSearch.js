import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setAllItems(response.data.meals || []);
        setSearchResults(response.data.meals || []);
      } catch (error) {
        setError('An error occurred while fetching the items.');
      }
    };

    fetchAllItems();
  }, []);

  useEffect(() => {
    const handleFoodSearch = () => {
      if (searchTerm.trim() === '') {
        setSearchResults(allItems);
      } else {
        const filteredItems = allItems.filter((item) =>
          item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredItems);
      }
    };

    handleFoodSearch();
  }, [searchTerm, allItems]);

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
          placeholder="Search for a food..."
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-full sm:w-auto"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.slice(0, displayCount).map((result) => (
            <div key={result.idMeal} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={result.strMealThumb}
                alt={result.strMeal}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{result.strMeal}</h3>
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
