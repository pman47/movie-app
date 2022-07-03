import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./AllMovies.css";
import Filter from "./Filter";
import Movie from "./Movie";

const AllMovies = ({ url }) => {
  const [realMovieList, setRealMovieList] = useState(null);
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [year, setYear] = useState("all");
  const { searchQuery } = useParams();

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setRealMovieList(jsonData.data.results);
        setMovieList(jsonData.data.results);
        setLoading(false);
      });
  }, [url]);

  const handleYearChanges = (yearValue) => {
    setYear(yearValue);
  };

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
      {isLoading ? (
        <div className="Loading">Loading...</div>
      ) : movieList.length === 0 ? (
        <div className="Loading">No Movies found :-{"("}</div>
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
