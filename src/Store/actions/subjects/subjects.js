import {
  SET_SUBJECTS,
  ADD_SUBJECT,
  EDIT_SUBJECT,
  REMOVE_SUBJECT,
  REMOVE_SUBJECTS_FOR_CATEGORY,
} from "../types";

export function setSubjects(subjects) {
  return { type: SET_SUBJECTS, payload: subjects };
}

export function addSubject(subject) {
  return { type: ADD_SUBJECT, payload: subject };
}

export function editSubject(subjectId, data) {
  return { type: EDIT_SUBJECT, payload: { subjectId, data } };
}

export function removeSubject(subjectId) {
  return { type: REMOVE_SUBJECT, payload: subjectId };
}

export function removeSubjectsForCategory(categoryId) {
  return { type: REMOVE_SUBJECTS_FOR_CATEGORY, payload: categoryId };
}
