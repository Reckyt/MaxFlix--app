import { GET_KINDS } from "../action";

export const kindReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_KINDS:
      return { ...state, kinds: action.payload };

    default:
      return state;
  }
};
