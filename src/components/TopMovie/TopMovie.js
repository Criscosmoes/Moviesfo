import React, { useState, useEffect } from "react";
import styles from "./TopMovie.module.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Image from "next/image";
const TopMovie = ({ topMovie }) => {
  /* return (
    <div
      className={styles["top-movie"]}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${topMovie.backdrop_path})`,
      }}
    >
      <div className={styles["movie-info"]}>
        <div className={styles.title}>
          <h2>{topMovie.title || topMovie.original_title}</h2>
        </div>
        <div className={styles.cta}>
          <button className={styles["info-btn"]}>WATCH NOW</button>
        </div>
      </div>
    </div>
  ); */

  return (
    <div className={styles["top-movie"]}>
      <Image
        width={1600}
        height={800}
        objectFit="cover"
        src={`https://image.tmdb.org/t/p/original${topMovie.backdrop_path}`}
        priority
      />
    </div>
  );
};

export default TopMovie;
