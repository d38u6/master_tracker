import {
  SET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
} from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    case ADD_CATEGORY:
      return [...state, payload];
    case EDIT_CATEGORY:
      return state.map((category) => {
        if (category.id !== payload.categoryId) {
          return category;
        }
        return { ...category, ...payload.data };
      });
    case REMOVE_CATEGORY:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
