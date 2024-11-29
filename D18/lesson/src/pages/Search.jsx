import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To show error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Fixed the typo to prevent form submission
    setLoading(true); // Set loading to true when fetching data
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=7aad06b3`
      );

      if (response.ok) {
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search || []);
        } else {
          setMovies([]);
          setError("No results found.");
        }
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSearch} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>

      {/* Loading message */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {
          movies.length > 0
            ? movies.map((movie) => (
                <div key={movie.imdbID} className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/placeholder.jpg"
                      } // Handle missing poster
                      className="card-img-top"
                      alt={movie.Title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.Title}</h5>
                      <Link
                        to={`/movie/${movie.imdbID}`}
                        className="btn btn-secondary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : !loading && <p>No movies found. Please try another search.</p> // If no movies and not loading
        }
      </div>
    </div>
  );
};

export default Search;
