import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Filter.css";

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
      <input
        className="searchMovieInput"
        type="text"
        placeholder="Enter Movie name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <select
        className="optionContainer"
        onChange={(e) => yearHandler(e.target.value)}
      >
        <option value="all">All</option>
        {years.map((year) => (
          <option value={year} key={Number(year)}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
