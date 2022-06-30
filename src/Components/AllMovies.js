import React, { useCallback, useEffect, useState } from "react";
import "./AllMovies.css";
import Movie from "./Movie";

const AllMovies = () => {
  const [url, setUrl] = useState(
    "https://movie-task.vercel.app/api/popular?page=1"
  );
  const [movieList, setMovieList] = useState(null);

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setMovieList(jsonData.data.results));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return movieList == null ? (
    <div className="Loading">Loading...</div>
  ) : (
    <div className="movieContainer">
      {movieList.map((movie) => {
        return <Movie movieData={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default AllMovies;
