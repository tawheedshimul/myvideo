import React from 'react';
import MovieSearch from './MovieSearch';
import MovieList from './MovieList';

const Movies = () => {
    return (
        <div>
            <MovieSearch></MovieSearch>
            <MovieList></MovieList>
        </div>
    );
};

export default Movies;