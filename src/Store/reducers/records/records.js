import {
  SET_RECORDS,
  ADD_RECORD,
  EDIT_RECORD,
  REMOVE_RECORD,
  REMOVE_RECORDS_FOR_CATEGORY,
  REMOVE_RECORDS_FOR_SUBJECT,
} from "../../actions/types";
export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_RECORDS:
      return payload;
    case ADD_RECORD:
      return [...state, payload];
    case EDIT_RECORD:
      return state.map((record) => {
        if (record.id !== payload.recordId) {
          return record;
        }
        return { ...record, ...payload.data, id: record.id };
      });
    case REMOVE_RECORD:
      return state.filter(({ id }) => id !== payload);
    case REMOVE_RECORDS_FOR_CATEGORY:
      return state.filter(({ categoryId }) => categoryId !== payload);
    case REMOVE_RECORDS_FOR_SUBJECT:
      return state.filter(({ subjectId }) => subjectId !== payload);
    default:
      return state;
  }
};
