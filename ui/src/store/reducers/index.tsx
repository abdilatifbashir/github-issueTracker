 
import { combineReducers } from "redux";

import repoReducer from "./repoReducer";
import issuesReducer from "./issuesReducer";
import filterReducer from "./filterReducer";



export default combineReducers({
  repository: repoReducer,
  issues:issuesReducer,
  filteredIssues:filterReducer
  
});