import { SET_CATEGORIES, ADD_CATEGORY, EDIT_CATEGORY } from "../types";

export function setCategories(categories) {
  return { type: SET_CATEGORIES, payload: categories };
}

export function addCategory(category) {
  return { type: ADD_CATEGORY, payload: category };
}

export function editCategory(categoryId, data) {
  return { type: EDIT_CATEGORY, payload: { categoryId, data } };
}
