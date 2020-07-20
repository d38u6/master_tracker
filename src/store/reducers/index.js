import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories";
import subjectsReducer from "./subjects/subjects";
import appReducer from "./app/app";

export default combineReducers({
  categories: categoriesReducer,
  subjects: subjectsReducer,
  app: appReducer,
});
