
import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_FILTER_REPO:
      return { ...state, repoVariable: action.payload };
  
    default:
      return state;
  }
};
