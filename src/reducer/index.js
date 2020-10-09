import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { directorReducer } from "./directorReducer";
import { userReducer } from "./userReducer";
import { routingReducer } from "./routingReducer";

const rootReducer = combineReducers({
  movieReducer,
  directorReducer,
  userReducer,
  routingReducer,
});

export default rootReducer;
