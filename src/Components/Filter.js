import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Filter = ({ movies, yearHandler }) => {
  const { searchQuery } = useParams();
  const [search, setSearch] = useState(searchQuery != null ? searchQuery : "");
  const navigate = useNavigate();

  let AllYears = movies.map((movie) => movie.release_date.split("-")[0]);
  let years = [];
  years = AllYears.filter((year, index) => AllYears.indexOf(year) === index);

  // let searchTimeOut;
  // const handleSearches = (searchValue) => {
  //   clearTimeout(searchTimeOut);
  //   searchTimeOut = window.setTimeout(() => {
  //     navigate(`/${searchValue}`);
  //   }, 700);
  // };

  useEffect(() => {
    let timeOut = window.setTimeout(() => {
      navigate(`/${search}`);
    }, 700);
    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div className="filterContainer">
      <select onChange={(e) => yearHandler(e.target.value)}>
        <option value="all">All</option>
        {years.map((year) => (
          <option value={year} key={Number(year)}>
            {year}
          </option>
        ))}
      </select>
      <input
        className="searchMovieInput"
        type="text"
        name="searchMovie"
        placeholder="Enter Movie name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
