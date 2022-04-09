import React, { useState, useEffect } from "react";
import styles from "./TopMovie.module.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
const TopMovie = ({ topMovie }) => {
  return (
    <div
      className={styles["top-movie"]}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${topMovie.backdrop_path})`,
      }}
    >
      <div className={styles["movie-info"]}>
        <div className={styles.title}>
          <h2>{topMovie.title || topMovie.original_title}</h2>
          <h4>{topMovie.release_date}</h4>
        </div>
        <div className={styles.cta}>
          <button className={styles["info-btn"]}>WATCH NOW</button>
          <AddBoxIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default TopMovie;
