import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useFetch } from "../hooks/useFetch";

export const Search = () => {
  const { query } = useParams();
  const [searchTerm, setSearchTerm] = useState(query || "");
  const [debouncedTerm, setDebouncedTerm] = useState(query || "");

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTerm(searchTerm), 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const { data: movies = [], error } = useFetch("search/movie", debouncedTerm);

  return (
    <div className="container py-5">
      <h3>Search Results for "{debouncedTerm}"</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {error && <p className="text-danger">Failed to fetch: {error}</p>}
      {movies.length === 0 && !error && <p className="text-muted">No results found</p>}

      <div className="d-flex flex-wrap gap-3 mt-3">
        {movies.map((movie) => (
          <Cart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
