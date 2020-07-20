import { PICK_CATEGORY } from "../../actions/types";

export default (state = { currentCategory: null }, { type, payload }) => {
  switch (type) {
    case PICK_CATEGORY:
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};
