
import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_ISSUES:
      return { ...state, issues: action.payload };
  
    default:
      return state;
  }
};