import { PICK_CATEGORY, PICK_SUBJECT } from "../types";

export function pickCategory(categoryId) {
  return { type: PICK_CATEGORY, payload: categoryId };
}

export function pickSubject(subjectId) {
  return { type: PICK_SUBJECT, payload: subjectId };
}
