import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, summary, poster, year, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          summary,
          poster,
          year,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <span className="movie__year">{year}</span>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li className="movie__genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
