import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import songsData from './SongsData.json';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    performSearch(event.target.value);
  };

  const performSearch = (searchTerm) => {
    const filteredSongs = songsData.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredSongs);
  };

  const displaySongs = searchTerm === '' ? songsData : searchResults;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Enter song title"
          className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button
          onClick={() => performSearch(searchTerm)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displaySongs.map((song) => (
          <div key={song.videoId} className="mb-4">
            <h3 className="text-lg font-bold mb-1">{song.title}</h3>
            <p className="text-gray-600">{song.artist}</p>
            <div className="aspect-w-16 aspect-h-9">
              <ReactPlayer
                url={song.youtubeLink}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
