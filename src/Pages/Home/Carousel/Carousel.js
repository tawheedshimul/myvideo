import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'http://www.omdbapi.com/',
          {
            params: {
              s: 'action',
              type: 'movie',
              apikey: '1a0e0f88',
            },
          }
        );

        setMovies(response.data.Search || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto my-8">
      {isLoading ? (
        <p className="text-center text-xl">Loading movies...</p>
      ) : (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              key={index}
              className={`inline-block mx-1 rounded-full w-4 h-4 ${
                isSelected ? 'bg-blue-500' : 'bg-gray-500'
              }`}
              onClick={onClickHandler}
              role="button"
              aria-label={label}
            />
          )}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                onClick={onClickHandler}
                aria-label={label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="18px"
                  height="18px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                onClick={onClickHandler}
                aria-label={label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="18px"
                  height="18px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>
            )
          }
        >
          {movies.map((movie, index) => (
            <motion.div
              key={movie.imdbID}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="object-cover h-64 w-full rounded-md"
              />
              <p className="text-lg font-bold mt-4">{movie.Title}</p>
            </motion.div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default VideoCarousel;
