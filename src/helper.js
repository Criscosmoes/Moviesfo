import axios from "axios";

export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIESDB_API_KEY}&language=en-US&page=1`
  );

  const [topMovie] = response.data.results;

  return {
    topMovie,
    movieList: response.data.results,
  };
};
