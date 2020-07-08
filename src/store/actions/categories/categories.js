import { SET_CATEGORIES, ADD_CATEGORY } from "../types";

export function setCategories(categories) {
  return { type: SET_CATEGORIES, payload: categories };
}

export function addCategory(category) {
  return { type: ADD_CATEGORY, payload: category };
}
