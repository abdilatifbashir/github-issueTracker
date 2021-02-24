import actions from "./index";

export const setRepo = (inputValue: any) => (dispatch: any) => {
    dispatch({ type: actions.SET_FILTER_REPO, payload: inputValue});
  };