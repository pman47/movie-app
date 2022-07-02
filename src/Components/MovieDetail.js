import React, { useCallback, useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState(null);

  let { movieId } = useParams();
  let url = "https://movie-task.vercel.app/api/movie?movieId=" + movieId;

  const fetchMovieData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setMovieData(jsonData.data));
  }, [url]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  if (movieData != null) {
    var backPoster =
      movieData.backdrop_path != null
        ? "https://image.tmdb.org/t/p/original" + movieData.backdrop_path
        : null;
    var title = movieData.title;
    var tagline = movieData.tagline;
    var des = movieData.overview;
    var frontPoster =
      movieData.poster_path != null
        ? "https://image.tmdb.org/t/p/original" + movieData.poster_path
        : null;
    var genres = movieData.genres;
    var release_date = movieData.release_date;
    var vote = movieData.vote_average;
    var vote_count = movieData.vote_count;
    var runtime = movieData.runtime;
  }

  return movieData == null ? (
    <div className="Loading">Loading...</div>
  ) : (
    <div className="movieMoreDetailContainer">
      <div className="BackgroundContainer">
        <img className="BackgroundPoster" src={backPoster} alt="Movie Poster" />
      </div>

      <div className="littleDetails">
        <p className="movieName">{title}</p>
        {tagline && <p className="tagline">{tagline}</p>}
        <div className="arrow"></div>
      </div>

      <div className="moreDetail">
        <div className="image_DetailContainer">
          <div className="left">
            <img src={frontPoster} alt="Front poster" />
          </div>
          <div className="right">
            <h1 className="title">{title}</h1>
            <p className="description">{des}</p>
            <p className="releaseDate">
              Release Date : <span className="bold">{release_date}</span>
            </p>
            <p className="runtime">
              Runtime : <span className="bold">{runtime} mins.</span>
            </p>
            <div className="voteDetails">
              <span className="vote">
                <span className="bold">{vote}</span>/10
              </span>
              <span className="totalVotes">
                <span className="bold">{vote_count}</span> votes.
              </span>
            </div>
            <div className="genresContainer">
              Genres :{" "}
              {genres.map((genre) => {
                return (
                  <span className="gerne" key={genre.id}>
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
