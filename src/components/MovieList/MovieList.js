import React from "react";
import styles from "./MovieList.module.scss";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import Link from "next/link";

const MovieList = ({ title, allMovies }) => {
  const renderedMovies = allMovies.map((cur) => {
    return (
      <li className={styles.item}>
        <div
          className={styles.movie}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${cur.poster_path})`,
          }}
        >
          <Link href={"/movies/[id]"} as={`/movies/${cur.id}`}>
            <ArrowCircleRightTwoToneIcon className={styles.button} />
          </Link>
        </div>
        <h2 className={styles["movie-title"]}>{cur.title}</h2>
      </li>
    );
  });

  return (
    <div className={styles["movie-container"]}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>{renderedMovies}</ul>
    </div>
  );
};

export default MovieList;
