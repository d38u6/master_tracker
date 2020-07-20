import { PICK_CATEGORY } from "../types";

export function pickCategory(categoryId) {
  return { type: PICK_CATEGORY, payload: categoryId };
}
