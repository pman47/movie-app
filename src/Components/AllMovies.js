import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./AllMovies.css";
import Filter from "./Filter";
import Movie from "./Movie";

const AllMovies = () => {
  const [url, setUrl] = useState(
    "https://movie-task.vercel.app/api/popular?page=1"
  );
  const [realMovieList, setRealMovieList] = useState(null);
  const [movieList, setMovieList] = useState(null);
  const [year, setYear] = useState("all");
  const { searchQuery } = useParams();

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setRealMovieList(jsonData.data.results);
        setMovieList(jsonData.data.results);
      });
  }, [url]);

  const handleYearChanges = (yearValue) => {
    setYear(yearValue);
  };

  useEffect(() => {
    if (searchQuery == null || searchQuery === "") {
      setUrl("https://movie-task.vercel.app/api/popular?page=1");
    } else {
      setUrl(
        "https://movie-task.vercel.app/api/search?page=1&query=" + searchQuery
      );
    }
  });

  useEffect(() => {
    if (year == null || year === "all") {
      setMovieList(realMovieList);
    } else {
      let tmpMovieList = realMovieList.filter((movie) => {
        return movie.release_date.split("-")[0] === year;
      });
      setMovieList(tmpMovieList);
    }
  }, [year]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {realMovieList && (
        <Filter
          yearHandler={handleYearChanges}
          movies={realMovieList}
          searchParam={searchQuery}
        />
      )}
      {movieList == null ? (
        <div className="Loading">Loading...</div>
      ) : movieList.length === 0 ? (
        <div className="Loading">No results found :-{"("}</div>
      ) : (
        <>
          <div className="movieContainer">
            {movieList.map((movie) => {
              return <Movie movieData={movie} key={movie.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default AllMovies;
