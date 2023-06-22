import React from 'react';
import moviesData from './movies.json';

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {moviesData.movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg p-4 shadow">
          <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-500">{movie.genre}</p>
          <p className="text-gray-500">Year: {movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
