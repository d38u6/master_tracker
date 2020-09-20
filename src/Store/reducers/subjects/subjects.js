import {
  SET_SUBJECTS,
  ADD_SUBJECT,
  EDIT_SUBJECT,
  REMOVE_SUBJECT,
  REMOVE_SUBJECTS_FOR_CATEGORY,
} from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_SUBJECTS:
      return payload;
    case ADD_SUBJECT:
      return [...state, payload];
    case EDIT_SUBJECT:
      return state.map((subject) => {
        if (subject.id !== payload.subjectId) {
          return subject;
        }
        delete subject["editMode"];
        return { ...subject, ...payload.data, id: subject.id };
      });
    case REMOVE_SUBJECT:
      return state.filter(({ id }) => id !== payload);
    case REMOVE_SUBJECTS_FOR_CATEGORY:
      return state.filter(({ categoryId }) => categoryId !== payload);
    default:
      return state;
  }
};
