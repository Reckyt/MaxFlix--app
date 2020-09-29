import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { MovieCard, NoResult, Burger, Menu } from "../composant";
import {
  addMovie,
  removeMovie,
  seenMovie,
  unseenMovie,
} from "../action/moviesAction";
import { useOnClickOutside } from "../utils/Function";

import "../css/MoviesList.css";

function MoviesListComponent(props) {
  const [open, setOpen] = useState(false);
  const [decade, setDecade] = useState();
  const [kind, setKind] = useState("");
  let wanted;
  let seen;
  let wishList = JSON.parse(localStorage.getItem("wishList"));
  let moviesSeen = JSON.parse(localStorage.getItem("moviesSeen"));

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const handleKind = (event) => {
    setKind(event.target.value);
  };

  const handleDecade = (event) => {
    setDecade(event.target.value);
  };

  let filteredMoviesList =
    props.movies &&
    props.movies.filter((movie) => {
      if (props.research) {
        return (
          movie.title.toLowerCase().includes(props.research.toLowerCase()) ||
          movie.director
            .toLowerCase()
            .includes(props.research.trim().toLowerCase())
        );
      } else if (decade) {
        let i = decade;
        for (i; i <= i + 10; i++) {
          return movie.year === i;
        }
      } else if (kind) {
        return movie.kind.toLowerCase().includes(kind.toLowerCase());
      } else {
        return movie;
      }
    });

  const renderList = (filteredMoviesList) => {
    if (filteredMoviesList.length === 0) {
      return <NoResult />;
    } else {
      return filteredMoviesList.map((movie, i) => {
        wanted = false;
        seen = false;
        if (wishList) {
          wishList.forEach((wantedMovie) => {
            if (movie.id_movie === wantedMovie.id_movie) {
              wanted = true;
            }
          });
        }
        if (moviesSeen) {
          moviesSeen.forEach((seenMovie) => {
            if (movie.id_movie === seenMovie.id_movie) {
              seen = true;
            }
          });
        }
        return (
          <MovieCard
            key={i}
            id={movie.id_movie}
            movie={movie}
            wanted={wanted}
            seen={seen}
            addMovie={props.addMovie}
            removeMovie={props.removeMovie}
            seenMovie={props.seenMovie}
            unseenMovie={props.unseenMovie}
          />
        );
      });
    }
  };

  return (
    <div className='container--list'>
      <h1>Films</h1>
      <div className='aside--burger' ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          open={open}
          setOpen={setOpen}
          handleDecade={handleDecade}
          handleKind={handleKind}
          kind={kind}
          decade={decade}
        />
      </div>
      <div className='container--movies'>
        {props.movies &&
          props.movies.length > 0 &&
          renderList(filteredMoviesList)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wishList: state.movieReducer.wishList,
  moviesSeen: state.movieReducer.moviesSeen,
});

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
  removeMovie: (movieId) => dispatch(removeMovie(movieId)),
  seenMovie: (movie) => dispatch(seenMovie(movie)),
  unseenMovie: (movieId) => dispatch(unseenMovie(movieId)),
});

const MoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListComponent);

export { MoviesList };
