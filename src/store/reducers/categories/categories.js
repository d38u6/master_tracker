import { SET_CATEGORIES, ADD_CATEGORY } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    case ADD_CATEGORY:
      return [...state, payload];
    default:
      return state;
  }
};
