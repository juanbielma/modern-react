const KEY = "566475b5";

const apiUrl = `http://www.omdbapi.com/?apikey=${KEY}`;

async function fetchRequest(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Something went wrong fetching movies");
  }

  return res.json();
}

async function getMovies(query) {
  const data = await fetchRequest(`${apiUrl}&s=${query}`);

  if (data.Response === "False") {
    throw new Error("Movie not found");
  }

  return data.Search.map((movie) => {
    const {
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: runtime,
      imdbRating,
      Plot: plot,
      Released: released,
      Actors: actors,
      Director: director,
      Genre: genre,
      imdbID,
    } = movie;
    return {
      title,
      year,
      poster,
      runtime,
      imdbRating,
      plot,
      released,
      actors,
      director,
      genre,
      imdbID,
    };
  });
}

async function getMovieById(movieId) {
  const data = await fetchRequest(`${apiUrl}&i=${movieId}`);

  if (data.Response === "False") {
    throw new Error("Movie not found");
  }

  return data;
}

export { getMovies, getMovieById };
