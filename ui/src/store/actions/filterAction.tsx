import actions from "./index";

export const setFilter = (filteredIssues: any) => (dispatch: any) => {
    dispatch({ type: actions.SET_FILTERED_ISSUES, payload: filteredIssues});
  };