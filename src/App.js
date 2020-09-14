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
} from "./routes";
import { HeaderHome } from "./composant";
import { getMovies } from "./action/moviesAction";
import { getDirectors } from "./action/directorsAction";

import "./App.css";

function App(props) {
  const propsGetMovies = props.getMovies;
  const propsgetDirectors = props.getDirectors;

  useEffect(() => {
    propsGetMovies();
    propsgetDirectors();
  }, [propsGetMovies, propsgetDirectors]);

  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderHome />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie/:id' component={Movie} />
          <Route path='/director/:id' component={Director} />
          <Route path='/Player' component={Player} />
          <Route
            path='/moviesList'
            render={() => <MoviesList movies={props.movies} />}
          />
          <Route
            path='/directorsList'
            render={() => <DirectorsList directors={props.directors} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  directors: state.directorReducer.directors,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
  getDirectors: () => dispatch(getDirectors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
