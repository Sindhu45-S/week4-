import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovie();
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!movie) return <p>Loading movie details...</p>;

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "path_to_backup_image.svg";

  return (
    <div className="container py-5">
      <h2 className="text-primary">{movie.title}</h2>
      <img src={imageUrl} alt={movie.title} className="img-fluid mb-3" />
      <p>{movie.overview}</p>
      <p>
        <strong>Rating:</strong>⭐ {movie.vote_average} | <strong>Reviews:</strong> {movie.vote_count}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
    </div>
  );
};

