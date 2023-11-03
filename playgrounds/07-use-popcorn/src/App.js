import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./mock-data";
import NavBar from "./views/navbar/navbar";
import Main from "./views/main/main";
import { Logo, Search, NumResults } from "./views/navbar/components";
import ListBox from "./components/ListBox/ListBox";
import MovieList from "./components/MoviesList/MoviesList";
import { WatchedSummary } from "./views/main/components";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults moviesCount={movies.length} />
      </NavBar>
      <Main movies={movies} onChangeMovies={setMovies}>
        <ListBox key="movies">
          <MovieList movies={movies} />
        </ListBox>
        <ListBox key="watched">
          <WatchedSummary watched={watched} />
          <MovieList movies={watched} />
        </ListBox>
      </Main>
    </>
  );
}
