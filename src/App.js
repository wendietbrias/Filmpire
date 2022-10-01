import { Home, Detail, Actors } from "./pages";
import { Sidebar } from "./components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByCategories, fetchMovieByGenre } from "./api";

function App() {
  const [category, setCategory] = useState(878);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieByCategory = async () => {
    setLoading(true);
    const movieData = await fetchMovieByCategories("popular", page);
    setMovies(movieData.results);
    setLoading(false);
  };

  const getMovieByGenre = async () => {
    setLoading(true);
    const movieData = await fetchMovieByGenre(category, page);
    setMovies(movieData?.results);
    setLoading(false);
  };

  const handleSearch = (e) => {
    if (e.keyCode) {
      setCategory(e.target.value);
    }
  };

  useEffect(() => {
    if (typeof category === "string") {
      getMovieByCategory(category, page);
    } else {
      getMovieByGenre(category, page);
    }
  }, [page, category]);

  return (
    <div className="App flex items-stretch">
      <Sidebar setPage={setPage} setCategory={setCategory} />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              movies={movies}
              page={page}
              setPage={setPage}
              loading={loading}
              handleSearch={handleSearch}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/actor/:id" element={<Actors />} />
      </Routes>
    </div>
  );
}

export default App;
