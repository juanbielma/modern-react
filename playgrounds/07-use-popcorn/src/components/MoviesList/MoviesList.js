import Movie from "../Movie/Movie";

function MovieList({ movies, onSelectMovie, onDelete }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default MovieList;
