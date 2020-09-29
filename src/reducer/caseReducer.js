import { CHANGE_HEADER } from "../action";

const initState = { caseId: 0 };

export const caseReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_HEADER:
      let newPage = action.payload;
      state = { ...state, caseId: newPage };
      return state;

    default:
      return state;
  }
};
