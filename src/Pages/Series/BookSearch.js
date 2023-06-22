import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleBookSearch = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`
        );
        setSearchResults(response.data.items || []);
      } catch (error) {
        setError('An error occurred while fetching the search results.');
      }
    };

    if (searchTerm.trim() !== '') {
      handleBookSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search for a book..."
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-full sm:w-auto"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={result.volumeInfo.imageLinks?.thumbnail}
                alt={result.volumeInfo.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{result.volumeInfo.title}</h3>
              <p className="text-sm">{result.volumeInfo.authors?.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
