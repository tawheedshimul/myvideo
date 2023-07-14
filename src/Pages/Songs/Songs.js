import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { ClipLoader } from 'react-spinners';

const SongSearch = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: searchQuery,
              maxResults: 12,
              key: 'AIzaSyDN-Gof-b7NAparJcn7wn-xXny1hlYL94M',
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error occurred during API request:', error);
      }
      setIsLoading(false);
    };

    if (searchQuery !== '') {
      fetchVideos();
    } else {
      setVideos([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsFullscreen(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsFullscreen(false);
  };

  const handleVideoReady = () => {
    setIsFullscreen(true);
  };

  return (
    <div className="bg-gray-200">
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold m-4 "><span className='p-2 bg-red-600 rounded'>Songs Search</span></h1>
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
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <ClipLoader color="#123abc" size={30} loading={true} />
            </div>
          ) : (
            videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-gray-200 rounded p-4 cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    width="100%"
                    height="auto"
                    playing={selectedVideo && selectedVideo.id.videoId === video.id.videoId}
                    onClick={() => setIsFullscreen(true)}
                    onReady={handleVideoReady}
                    controls={!isFullscreen}
                    light={!isFullscreen}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1,
                          fs: isFullscreen ? 1 : 0,
                        },
                      },
                    }}
                  />
                  <div className="font-bold">{video.snippet.title}</div>
                </>
              </div>
            ))
          )}
        </div>
        {selectedVideo && isFullscreen && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black">
            <div className="absolute top-0 right-0 m-4">
              <button
                onClick={handleCloseVideo}
                className="text-white text-lg p-2 rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
            <div className="flex justify-center items-center h-full">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`}
                width="80%"
                height="80%"
                controls
                playing
                onEnded={handleCloseVideo}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      fs: 1,
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongSearch;
