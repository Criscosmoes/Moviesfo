import React from "react";
import styles from "./MovieList.module.scss";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import Link from "next/link";
import Image from "next/image";

const MovieList = ({ title, allMovies }) => {
  const renderedMovies = allMovies.map((cur) => {
    /* return (
      <li className={styles.item} key={cur.id}>
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
    ); */

    return (
      <li className={styles.item} key={cur.id}>
        <Image
          layout="responsive"
          src={`https://image.tmdb.org/t/p/original${cur.poster_path}`}
          width="450"
          height="600"
        />
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
