import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories";
import subjectsReducer from "./subjects/subjects";

export default combineReducers({
  categories: categoriesReducer,
  subjects: subjectsReducer,
});
