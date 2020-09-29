import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { caseReducer } from "./caseReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  caseReducer,
});

export default rootReducer;
