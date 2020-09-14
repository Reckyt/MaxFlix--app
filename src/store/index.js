import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";

export default function store() {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

  return createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
