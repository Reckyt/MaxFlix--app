import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getMovieWithId } from "../action/moviesAction";
import { PlayerComponent } from "../composant";

function PlayerConnect(props) {
  const isLogged = localStorage.getItem("cool-jwt");
  const movieId = props.match.params.id;

  if (!isLogged) {
    return <Redirect to='/signIn' />;
  }
  return (
    <div>
      <PlayerComponent movieId={movieId} movie={props.movie} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerConnect);

export { Player };
