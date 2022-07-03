import React from "react";
import { useParams } from "react-router";
import AllMovies from "./AllMovies";

const Main = () => {
  const { searchQuery } = useParams();
  return searchQuery == null ? (
    <AllMovies url={"https://movie-task.vercel.app/api/popular?page=1"} />
  ) : (
    <AllMovies
      url={`https://movie-task.vercel.app/api/search?page=1&query=${searchQuery}`}
    />
  );
};

export default Main;
