import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
              maxResults: 50,
              key: 'AIzaSyDN-Gof-b7NAparJcn7wn-xXny1hlYL94M',
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

  const playVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

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
          <div
            key={video.id.videoId}
            className="bg-gray-200 rounded p-4 cursor-pointer"
            onClick={() => playVideo(video.id.videoId)}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-auto mb-2"
            />
            <div className="font-bold">{video.snippet.title}</div>
            <div className="text-gray-700">{video.snippet.description}</div>
            <div className="text-gray-500">Video ID: {video.id.videoId}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesSearch;
