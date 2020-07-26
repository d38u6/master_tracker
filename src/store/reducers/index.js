import { combineReducers } from "redux";
import appReducer from "./app/app";
import categoriesReducer from "./categories/categories";
import subjectsReducer from "./subjects/subjects";
import recordsReducer from "./records/records";

export default combineReducers({
  app: appReducer,
  categories: categoriesReducer,
  subjects: subjectsReducer,
  records: recordsReducer,
});
