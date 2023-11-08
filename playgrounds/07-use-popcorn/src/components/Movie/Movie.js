function Movie({ movie, onSelectMovie, onDelete }) {
  return (
    <li onClick={() => onSelectMovie && onSelectMovie(movie.imdbID)}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      {!movie.runtime ? (
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.year}</span>
          </p>
        </div>
      ) : (
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>

          <button
            className="btn-delete"
            onClick={() => onDelete && onDelete(movie.imdbID)}
          >
            X
          </button>
        </div>
      )}
    </li>
  );
}

export default Movie;
