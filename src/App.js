import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllMovies from "./Components/AllMovies";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllMovies />}>
          <Route path=":searchQuery" element={<AllMovies />} />
        </Route>
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
