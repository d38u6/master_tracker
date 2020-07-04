import { SET_CATEGORIES } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
