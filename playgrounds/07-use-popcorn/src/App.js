import { useState, useEffect } from "react";
import NavBar from "./views/navbar/navbar";
import Main from "./views/main/main";
import { Logo, Search, NumResults } from "./views/navbar/components";
import ListBox from "./components/ListBox/ListBox";
import MovieList from "./components/MoviesList/MoviesList";
import { MovieDetails, WatchedSummary } from "./views/main/components";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getMovies } from "./services/movies";
import { tempWatchedData } from "./mock-data";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState("tt1375666");

  useEffect(() => {
    setError("");

    if (query.length < 3) {
      setMovies([]);
      return;
    }

    setIsLoading(true);
    handleCloseMovie();

    getMovies(query)
      .then((data) => {
        setMovies(data);
      })
      .catch((e) => {
        setError(e?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  function handleSelectMovie(movieId) {
    setSelectedId(movieId);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((prev) => [...prev, movie]);
  }

  function handleDelete(movieId) {
    setWatched((prev) => prev.filter((mv) => mv.imdbID !== movieId));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults moviesCount={movies.length} />
      </NavBar>
      <Main movies={movies} onChangeMovies={setMovies}>
        <ListBox key="movies">
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList onSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {!isLoading && error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox key="watched">
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <MovieList
                movies={watched}
                isWatchedList={true}
                onDelete={handleDelete}
              />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}
