import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${encodeURIComponent(query)}`);
       setQuery(""); // optional if you want to clear after search
    }
  };

  const clearSearch = () => setQuery("");

  return (
    <nav className="navbar navbar-expand-md navbar-dark animated-header fixed-top shadow-sm">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold">
          <i className="bi bi-play-circle-fill me-2"></i>Movieque
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">Top Rated</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">Upcoming</NavLink>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex align-items-center position-relative animated-search-form" onSubmit={handleSearch}>
            <input
              type="search"
              className={`form-control form-control-sm rounded-pill animated-search ${query ? "active" : ""}`}
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Clear button */}
           

            <button type="submit" className="btn btn-outline-light btn-sm rounded-pill animated-btn ms-2">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
