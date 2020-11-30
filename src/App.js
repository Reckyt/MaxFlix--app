import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  Movie,
  MoviesList,
  Director,
  DirectorsList,
  Player,
  SignUp,
  Account,
  SignIn,
} from "./routes";
import { HeaderHome } from "./composant";
import {
  AsideMenu,
  TableItems,
  NewMovie,
  NewDirector,
  ModifyMovie,
  ModifyDirector,
} from "./admin";

import { getUserWithId } from "./action/userAction";
import { getMovies, deleteMovie } from "./action/moviesAction";
import { getDirectors, deleteDirector } from "./action/directorsAction";
import { getWantedMovies, getSeenMovies } from "./action/handleMovieAction";
import { getKinds } from "./action/kindAction";

import "./App.css";

function App(props) {
  const idUser = localStorage.getItem("id-user");

  const propsGetMovies = props.getMovies;
  const propsGetDirectors = props.getDirectors;
  const propsDeleteMovie = props.deleteMovie;
  const propsDeleteDirector = props.deleteDirector;
  const propsGetUserWithId = props.getUserWithId;
  const propsGetWantedMovies = props.getWantedMovies;
  const propsGetSeenMovies = props.getSeenMovies;
  const propsGetKinds = props.getKinds;

  useEffect(() => {
    propsGetMovies();
    propsGetDirectors();
    propsGetUserWithId(idUser);
    propsGetWantedMovies(idUser);
    propsGetSeenMovies(idUser);
    propsGetKinds();
  }, [
    propsGetMovies,
    propsGetDirectors,
    propsGetUserWithId,
    idUser,
    propsGetWantedMovies,
    propsGetSeenMovies,
    propsGetKinds,
  ]);

  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderHome />
        <AsideMenu />
        <Switch>
          <Route exact path='/' render={() => <Home movies={props.movies} />} />
          <Route
            path='/moviesList'
            render={() => (
              <MoviesList
                movies={props.movies}
                research={props.research}
                kinds={props.kinds}
              />
            )}
          />
          <Route
            path='/directorsList'
            render={() => (
              <DirectorsList
                directors={props.directors}
                research={props.research}
              />
            )}
          />
          <Route path='/movie/:id' component={Movie} />
          <Route path='/director/:id' component={Director} />
          <Route path='/Player/:id/:title' component={Player} />

          <Route path='/signUp' component={SignUp} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/account/:id' component={Account} />

          <Route
            path='/admin/new-movie'
            render={() => <NewMovie directors={props.directors} />}
          />
          <Route
            path='/admin/new-director'
            render={(...props) => <NewDirector {...props} />}
          />
          <Route
            path='/admin/movies-items'
            render={() => (
              <TableItems
                items={props.movies}
                research={props.research}
                deleteItem={propsDeleteMovie}
                movie={true}
              />
            )}
          />
          <Route
            path='/admin/directors-items'
            render={() => (
              <TableItems
                items={props.directors}
                research={props.research}
                deleteItem={propsDeleteDirector}
              />
            )}
          />
          <Route
            path='/modify-movie/:id'
            render={(props) => (
              <ModifyMovie {...props} directors={props.directors} />
            )}
          />
          <Route
            path='/modify-director/:id'
            render={(props) => <ModifyDirector {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  directors: state.directorReducer.directors,
  research: state.movieReducer.research,
  user: state.userReducer.user,
  kinds: state.kindReducer.kinds,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
  getDirectors: () => dispatch(getDirectors()),
  deleteDirector: (itemId) => dispatch(deleteDirector(itemId)),
  deleteMovie: (itemId) => dispatch(deleteMovie(itemId)),
  getUserWithId: (userId) => dispatch(getUserWithId(userId)),
  getWantedMovies: (userId) => dispatch(getWantedMovies(userId)),
  getSeenMovies: (userId) => dispatch(getSeenMovies(userId)),
  getKinds: () => dispatch(getKinds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
