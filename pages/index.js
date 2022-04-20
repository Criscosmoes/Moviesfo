import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { fetchMovies } from "../src/helper";
import axios from "axios";

// components

import NavBar from "../src/components/NavBar/NavBar";
import TopMovie from "../src/components/TopMovie/TopMovie";
import MovieList from "../src/components/MovieList/MovieList";

export default function Home({ topMovie, movieList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <NavBar />
        <TopMovie topMovie={topMovie} />
        <MovieList title={"Popular"} allMovies={movieList.popular} />
        <MovieList title={"Top Rated"} allMovies={movieList.topRated} />
        <MovieList title={"Upcoming"} allMovies={movieList.upcoming} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await axios.get("http://localhost:3000/api/hello");

  const { topMovie, movieList } = data.data;

  return {
    props: { topMovie, movieList },
  };
}
