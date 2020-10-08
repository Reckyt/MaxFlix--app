import { CHANGE_HEADER, SHOW_ASIDE_MENU } from "../action";

const iniState = {
  caseId: 0,
  showAsideMenu: false,
};

export const routingReducer = (state = iniState, action) => {
  switch (action.type) {
    case CHANGE_HEADER:
      return { ...state, caseId: action.payload };

    case SHOW_ASIDE_MENU:
      return { ...state, showAsideMenu: action.payload };

    default:
      return state;
  }
};
