import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { MovieCard, NoResult, Burger, Menu, Loading } from "../composant";
import {
  addWantedMovie,
  removeWantedMovie,
  seenMovie,
  unseenMovie,
} from "../action/handleMovieAction";
import { useOnClickOutside } from "../utils/Function";

import upArrow from "../assets/pictures/upArrow.svg";

import "../css/MoviesList.css";

function MoviesListComponent(props) {
  const [open, setOpen] = useState(false);
  const [decade, setDecade] = useState();
  const [kind, setKind] = useState("");
  let wanted;
  let seen;

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
        for (let i = Number(decade); i < Number(decade) + 10; i++) {
          console.log(i);
          return movie.year === i;
        }
      } else if (kind) {
        return movie.kind.toLowerCase().includes(kind.toLowerCase());
      } else if (decade && kind) {
        let i = Number(decade);
        for (i; i <= i + 10; i++) {
          return (
            movie.kind.toLowerCase().includes(kind.toLowerCase()) &&
            movie.year === i
          );
        }
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
        if (props.wantedMovies) {
          props.wantedMovies.forEach((wantedMovie) => {
            if (movie.id_movie === wantedMovie.movie_id_movie) {
              wanted = true;
            }
          });
        }
        if (props.seenMovies) {
          props.seenMovies.forEach((seenMovie) => {
            if (movie.id_movie === seenMovie.movie_id_movie) {
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
            addWantedMovie={props.addWantedMovie}
            removeWantedMovie={props.removeWantedMovie}
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
          kinds={props.kinds}
          kind={kind}
          decade={decade}
        />
      </div>
      <div className='container--movies'>
        {props.movies && props.movies.length > 0 ? (
          renderList(filteredMoviesList)
        ) : (
          <Loading />
        )}
      </div>
      <div id='scroll_to_top'>
        <a href='#top'>
          <img src={upArrow} alt='Retourner en haut' />
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wantedMovies: state.handleMovieReducer.wantedMovies,
  seenMovies: state.handleMovieReducer.seenMovies,
});

const mapDispatchToProps = (dispatch) => ({
  addWantedMovie: (idMovie, idUser) =>
    dispatch(addWantedMovie(idMovie, idUser)),
  removeWantedMovie: (idMovie, idUser) =>
    dispatch(removeWantedMovie(idMovie, idUser)),
  seenMovie: (idMovie, idUser) => dispatch(seenMovie(idMovie, idUser)),
  unseenMovie: (idMovie, idUser) => dispatch(unseenMovie(idMovie, idUser)),
});

const MoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListComponent);

export { MoviesList };
