// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Redis from "ioredis";
import { fetchMovies } from "./../../src/helper";

let redis = new Redis(
  "rediss://:17c3ff0d87f2414b8080bd8955f2729d@usw2-calm-elf-30072.upstash.io:30072"
);

export default async function handler(req, res) {
  // check if movies in cache
  await redis.get("movies", async (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data) {
      const response = JSON.parse(data);
      res.status(200).send(response);
    }

    if (!data) {
      const response = await fetchMovies();
      redis.setex("movies", 60 * 60 * 24, JSON.stringify(response));
      res.status(200).send(response);
    }
  });
}
