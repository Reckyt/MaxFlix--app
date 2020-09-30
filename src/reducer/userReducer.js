import { ADD_USER, LOGIN, GET_USER_WITH_ID, ISLOGGED } from "../action";

const iniState = {
  isLogged: false,
};

export const userReducer = (state = iniState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, newUser: action.payload };

    case LOGIN:
      return { ...state, userInfo: action.payload, isLogged: action };

    case ISLOGGED:
      return { ...state, isLogged: action.payload };

    case GET_USER_WITH_ID:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
