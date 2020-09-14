import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
});

export default rootReducer;
