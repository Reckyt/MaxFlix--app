import {
  GET_DIRECTORS,
  GET_DIRECTORS_WITH_ID,
  DELETE_DIRECTOR,
  SEARCH_DIRECTOR,
  UPDATE_DIRECTOR,
  UPDATE_DIRECTOR_IN_DATABASE,
} from "../action";

export const directorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DIRECTORS:
      return { ...state, directors: action.payload };

    case GET_DIRECTORS_WITH_ID:
      let dir = action.payload;
      const directorToUpdate = { ...dir };
      return {
        ...state,
        director: action.payload,
        directorToUpdate: directorToUpdate,
      };

    case DELETE_DIRECTOR:
      let oldListDirector = state.directors;
      let newListDirector = oldListDirector.filter(
        (director) => director.id_director !== action.payload
      );
      return { ...state, directors: newListDirector };

    case SEARCH_DIRECTOR:
      return { ...state, research: action.payload };

    case UPDATE_DIRECTOR:
      let directorUpdate = state.directorToUpdate;
      directorUpdate[action.payload.targetName] = action.payload.targetValue;
      console.log('reducer', directorUpdate[action.payload.targetValue])
      state = { ...state, directorToUpdate: directorUpdate };
      return state;

    case UPDATE_DIRECTOR_IN_DATABASE:
      return { ...state, director: action.payload };

    default:
      return state;
  }
};
