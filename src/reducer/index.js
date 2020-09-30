import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { caseReducer } from "./caseReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  caseReducer,
  userReducer,
});

export default rootReducer;
