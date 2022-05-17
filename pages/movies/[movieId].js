import axios from "axios";
import styles from "./movie.module.scss";
import MovieInfo from "../../src/components/MovieInfo/MovieInfo";
const Movie = ({ movie }) => {
  return (
    <div className={styles["movie-container"]}>
      <MovieInfo movie={movie} />
    </div>
  );
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

export default Movie;
