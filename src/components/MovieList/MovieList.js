import React from "react";
import styles from "./MovieList.module.scss";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import Link from "next/link";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MovieList = ({ title, allMovies }) => {
  const renderedMovies = allMovies.map((cur) => {
    return (
      <li className={styles.item} key={cur.id}>
        <img
          className={styles.movie}
          src={`https://image.tmdb.org/t/p/original${cur.poster_path}`}
        />
        <div className={styles["movie-bottom-info"]}>
          <h2 className={styles["movie-title"]}>{cur.title}</h2>
          <ArrowRightAltIcon className={styles["icon"]} />
        </div>
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
