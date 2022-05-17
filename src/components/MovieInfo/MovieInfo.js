import React from "react";
import styles from "./MovieInfo.module.scss";
import Image from "next/image";

const MovieInfo = ({ movie }) => {
  console.log(movie);

  return (
    <div
      className={styles["movie"]}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={styles["transparent"]}>
        <div className={styles["image-container"]}>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            priority={true}
            width={400}
            height={520}
          />
        </div>
        <div className={styles["movie-information"]}>
          <a href={movie.homepage}>
            {movie.title || movie.original_title} ({movie.release_date})
          </a>
          <p>
            Overview: <br></br> <br></br> {movie.overview}
          </p>
          <h2>Vote Average: {movie.vote_average}/10</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
