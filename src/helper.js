import axios from "axios";

export const fetchMovies = async () => {
  const popularMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIESDB_API_KEY}&language=en-US&`
  );

  const upcomingMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIESDB_API_KEY}&language=en-US&`
  );

  const topRatedMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIESDB_API_KEY}&language=en-US&`
  );

  const allMovies = {
    popular: popularMovies.data.results || [],
    upcoming: upcomingMovies.data.results || [],
    topRated: topRatedMovies.data.results || [],
  };

  const randomNumber = Math.floor(
    Math.random() * (allMovies.popular.length - 1) + 1
  );

  const topMovie = allMovies.popular[randomNumber];

  return {
    topMovie,
    movieList: allMovies,
  };
};
