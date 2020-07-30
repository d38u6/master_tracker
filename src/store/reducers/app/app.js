import { PICK_CATEGORY, PICK_SUBJECT } from "../../actions/types";

const initState = { currentCategory: null, currentSubject: null };

export default (state = initState, { type, payload }) => {
  switch (type) {
    case PICK_CATEGORY:
      return { ...state, currentCategory: payload };
    case PICK_SUBJECT:
      return { ...state, currentSubject: payload };
    default:
      return state;
  }
};
