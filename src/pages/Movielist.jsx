import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useFetch } from "../hooks/useFetch";

export const Movielist = ({ title, apiPath }) => {
  const { data: movies = [], error } = useFetch(apiPath);
  const navigate = useNavigate();

  useEffect(() => { document.title = title; }, [title]);

  return (
    <main className="container py-4">
      {title === "Your Guide to great Movies" && (
        <div className="p-5 border mb-5 welcome-box">
          <h3 className="text-primary">Welcome to Movieque</h3>
          <p className="lead">
            Discover movies you'll love with personalized suggestions and curated collections.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/movies/upcoming")}>
            Explore More!
          </button>
        </div>
      )}

      <h5 className="text-secondary py-2 border-bottom">{title}</h5>

      {error && <p className="text-danger">Failed to fetch movies: {error}</p>}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-2">
        {movies.length > 0
          ? movies.map((movie) => <Cart key={movie.id} movie={movie} />)
          : !error && <p className="text-muted">Loading movies...</p>}
      </div>
    </main>
  );
};
