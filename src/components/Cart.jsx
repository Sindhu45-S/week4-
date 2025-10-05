import { useNavigate } from "react-router-dom";
import backup from "../assets/react.svg";


export const Cart = ({ movie }) => {
  const navigate = useNavigate();
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : backup;

  const handleReadMore = () => {
    navigate(`/movie/${id}`); // navigate to movie details page
  };

  return (
    <div className="col">
      <div
        className="card card-header-style shadow-sm"
        style={{ width: "18rem", minHeight: "450px" }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary">{title}</h5>
          <p
            className="card-text"
            style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {overview || "No description available."}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <button className="btn btn-sm btn-outline-light" onClick={handleReadMore}>
              Read More
            </button>
            <small>
              <i className="bi bi-star-fill text-warning"></i> {vote_average} | {vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
