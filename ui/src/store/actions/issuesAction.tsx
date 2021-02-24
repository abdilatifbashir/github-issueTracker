import actions from "./index";

export const setIssues = (issues: any) => (dispatch: any) => {
    dispatch({ type: actions.SET_ISSUES, payload: issues});
  };