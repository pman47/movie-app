import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":searchQuery" element={<Main />} />
        </Route>
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
