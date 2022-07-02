import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ movieData }) => {
  const { id, title, poster_path, vote_average } = movieData;
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie">
        <div className="poster">
          <img
            src={
              poster_path && `https://image.tmdb.org/t/p/original${poster_path}`
            }
            alt={title}
          />
        </div>
        <div className="movieDetails">
          <h3 className="movieTitle">{title}</h3>
          <div className="vote">{vote_average}/10</div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
