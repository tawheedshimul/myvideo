import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const SeriesSearch = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: searchQuery,
              maxResults: 10,
              key: 'AIzaSyAt7DOQwI8_FSPm2QvuLrZgWXQXnPf_UvU',
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error occurred during API request:', error);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Series Search</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for series..."
          className="border border-gray-400 rounded p-2 mr-2 w-1/2"
        />
        <button
          onClick={() => setSearchQuery('')}
          className="bg-gray-400 text-white rounded px-4 py-2"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-gray-200 rounded p-4">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              width="100%"
              height="auto"
            />
            <div className="font-bold">{video.snippet.title}</div>
            <div className="text-gray-700">{video.snippet.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesSearch;
