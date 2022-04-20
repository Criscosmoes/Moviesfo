import axios from "axios";

const MovieId = ({ movie }) => {
  return <div>{movie.title || movie.original_title}</div>;
};

export const getServerSideProps = async (req) => {
  const id = req.query.movieId;
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIESDB_API_KEY}&language=en-US`
  );

  const movie = response.data;

  return {
    props: {
      movie,
    },
  };
};

export default MovieId;
