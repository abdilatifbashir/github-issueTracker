
import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_FILTERED_ISSUES:
      return { ...state, filteredIssues: action.payload };
  
    default:
      return state;
  }
};