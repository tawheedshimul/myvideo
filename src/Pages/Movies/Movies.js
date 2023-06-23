import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import movies from './movies.json';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const performSearch = () => {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredMovies);
      setVisibleCount(8);
      setVisibleMovies(filteredMovies.slice(0, 8));
    };

    if (searchTerm === '') {
      setVisibleMovies(movies.slice(0, visibleCount));
    } else {
      performSearch();
    }
  }, [searchTerm, visibleCount]);

  const handleSeeMoreClick = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setVisibleMovies(movies.slice(0, visibleCount));
    } else {
      setVisibleMovies(searchResults.slice(0, visibleCount));
    }
  }, [searchResults, visibleCount, searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Enter movie title"
          className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500 flex-grow"
        />
      </div>

      {visibleMovies.length === 0 ? (
        <p className="text-center text-gray-600">Sorry, no files found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleMovies.map((movie) => (
            <div key={movie.videoId} className="mb-4">
              <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
              <p className="text-gray-600">{movie.artist}</p>
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  url={movie.youtubeLink}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {!searchTerm && visibleCount < movies.length && visibleMovies.length > 0 && (
        <button
          onClick={handleSeeMoreClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 focus:outline-none"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default SearchPage;
