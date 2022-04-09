import React from "react";
import styles from "./MovieList.module.scss";

const MovieList = ({ title, allMovies }) => {
  const renderedMovies = allMovies.map((cur) => {
    return (
      <li
        className={styles.movie}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${cur.poster_path})`,
        }}
      ></li>
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
