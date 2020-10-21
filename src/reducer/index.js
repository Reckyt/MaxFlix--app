import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { userReducer } from "./userReducer";
import { routingReducer } from "./routingReducer";
import { handleMovieReducer } from "./handleMovieReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  userReducer,
  routingReducer,
  handleMovieReducer,
});

export default rootReducer;
