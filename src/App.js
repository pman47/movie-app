import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllMovies from "./Components/AllMovies";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllMovies />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
