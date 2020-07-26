import {
  SET_RECORDS,
  ADD_RECORD,
  EDIT_RECORD,
  REMOVE_RECORD,
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
        return { ...record, ...payload.data };
      });
    case REMOVE_RECORD:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
