import reducer from "Store/reducers/app/app";
import * as actions from "Store/actions/app/app";

import { categoryOne, subOne } from "Data/fixtures";

describe("app reducer", () => {
  it("should return default state with unknown action", () => {
    const state = { currentCategory: "id", currentSubject: "id" };
    expect(reducer(state, { type: "unknown" })).toEqual(state);
  });

  it("should set 'currentCategory'", () => {
    expect(
      reducer(undefined, actions.pickCategory(categoryOne.id))
    ).toMatchObject({
      currentCategory: categoryOne.id,
    });
  });

  it("should set 'currentSubject'", () => {
    expect(reducer(undefined, actions.pickSubject(subOne.id))).toMatchObject({
      currentSubject: subOne.id,
    });
  });
});
