import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { caseReducer } from "./caseReducer";
import { userReducer } from "./userReducer";
import { routingReducer } from "./routingReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  caseReducer,
  userReducer,
  routingReducer,
});

export default rootReducer;
