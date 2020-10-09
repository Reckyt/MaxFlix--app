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
  DashBoard,
  TableItems,
  NewMovie,
  NewDirector,
  ModifyMovie,
  ModifyDirector,
} from "./admin";

import { getMovies } from "./action/moviesAction";
import { getUserWithId } from "./action/userAction";
import { getDirectors, deleteDirector } from "./action/directorsAction";

import "./App.css";

function App(props) {
  const idUser = localStorage.getItem("id-user");

  const propsGetMovies = props.getMovies;
  const propsGetDirectors = props.getDirectors;
  const propsDeleteDirector = props.deleteDirector;
  const propsGetUserWithId = props.getUserWithId;

  useEffect(() => {
    propsGetMovies();
    propsGetDirectors();
    propsGetUserWithId(idUser);
  }, [propsGetMovies, propsGetDirectors, propsGetUserWithId, idUser]);

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
              <MoviesList movies={props.movies} research={props.research} />
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
          <Route path='/Player' component={Player} />

          <Route path='/signUp' component={SignUp} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/account/:id' component={Account} />

          <DashBoard path='/admin/dashboard' />
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
            render={() => <TableItems items={props.movies} movie={true} />}
          />
          <Route
            path='/admin/directors-items'
            render={() => (
              <TableItems
                items={props.directors}
                getDirectors={propsGetDirectors}
                deleteDirector={propsDeleteDirector}
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
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
  getDirectors: () => dispatch(getDirectors()),
  deleteDirector: (directorId) => dispatch(deleteDirector(directorId)),
  getUserWithId: (userId) => dispatch(getUserWithId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
