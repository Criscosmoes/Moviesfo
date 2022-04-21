import styles from "./TopMovie.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TopMovie = ({ topMovie }) => {
  return (
    <div className={styles["top-movie-container"]}>
      <h1>This Weeks Top Movie</h1>
      <img
        className={styles["top-movie"]}
        src={`https://image.tmdb.org/t/p/original${topMovie.backdrop_path}`}
      />
      <div className={styles["movie-bottom-info"]}>
        <h2 className={styles["movie-title"]}>{topMovie.title}</h2>
        <ArrowRightAltIcon className={styles["icon"]} />
      </div>
    </div>
  );
};

export default TopMovie;
