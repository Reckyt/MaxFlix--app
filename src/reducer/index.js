import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { userReducer } from "./userReducer";
import { routingReducer } from "./routingReducer";
import { handleMovieReducer } from "./handleMovieReducer";
import { kindReducer } from "./kindReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  userReducer,
  routingReducer,
  handleMovieReducer,
  kindReducer,
});

export default rootReducer;
