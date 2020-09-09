import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, Movie, MoviesList, Director, DirectorsList } from "./routes";
import { HeaderHome } from "./composant";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderHome />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie' component={Movie} />
          <Route path='/moviesList' component={MoviesList} />
          <Route path='/director' component={Director} />
          <Route path='/directorsList' component={DirectorsList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
