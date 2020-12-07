import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getMovieWithId } from "../action/moviesAction";
import { PlayerComponent } from "../composant";

function PlayerConnect(props) {
  const isLogged = localStorage.getItem("cool-jwt");
  const movieId = props.match.params.id;
  const canWatch = props.user && props.user.canWatch;

  if (!isLogged) {
    return <Redirect to='/signIn' />;
  }
  return (
    <div>
      <PlayerComponent
        movieId={movieId}
        movie={props.movie}
        canWatch={canWatch}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
});

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerConnect);

export { Player };
