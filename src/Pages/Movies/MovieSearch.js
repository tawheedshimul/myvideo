import React, { useState } from 'react';
import axios from 'axios';


const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    // Function to handle the search input change
    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle the movie search
    const handleMovieSearch = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=1a0e0f88`);
            setSearchResults(response.data.Search || []);
        } catch (error) {
            setError('An error occurred while fetching the search results.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder="Search for a movie..."
            />
            <button onClick={handleMovieSearch}>Search</button>
            {error && <p>{error}</p>}
            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.imdbID}>{result.Title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieSearch;
