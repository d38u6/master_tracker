import reducer from "../app/app";
import * as actions from "../../actions/app/app";

import { categoryOne } from "../../../data/fixtures";

describe("app reducer", () => {
  it("should return default state with unknown action", () => {
    const state = { currentCategory: "id" };
    expect(reducer(state, { type: "unknown" })).toEqual(state);
  });

  it("should set 'currentCategory'", () => {
    expect(reducer(undefined, actions.pickCategory(categoryOne.id))).toEqual({
      currentCategory: categoryOne.id,
    });
  });
});
