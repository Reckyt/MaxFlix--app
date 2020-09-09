import React from "react";

import { MovieCard } from "../composant";

import "../css/MoviesList.css";

const movies = [
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA,1",
    real: "Peter Jackson",
    year: 2001,
    poster:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "SDA2",
    real: "Peter Jackson",
    year: 2002,
    poster:
      "https://www.mauvais-genres.com/25554-large_default/le-seigneur-des-anneaux-les-deux-tours-affiche-de-film-40x60-cm-2002-viggo-mortensen-peter-jackson.jpg",
  },
];

function MoviesList() {
  return (
    <div className='container--list'>
      <h1>Films</h1>
      <div className='container--movies'>
        {movies.map((movie, i) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export { MoviesList };
