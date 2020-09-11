import * as actions from "Store/actions/app/app";
import { PICK_CATEGORY, PICK_SUBJECT } from "Store/actions/types";

import { categoryOne, subOne } from "Data/fixtures";

describe("app actions", () => {
  describe("creates an action to pick category", () => {
    let action;
    beforeEach(() => {
      action = actions.pickCategory(categoryOne.id);
    });

    it("action should contain correctly type `PICK_CATEGORY`", () => {
      expect(action.type).toEqual(PICK_CATEGORY);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(categoryOne.id);
    });
  });

  describe("creates an action to pick subject", () => {
    let action;
    beforeEach(() => {
      action = actions.pickSubject(subOne.id);
    });

    it("action should contain correctly type `PICK_SUBJECT`", () => {
      expect(action.type).toEqual(PICK_SUBJECT);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(subOne.id);
    });
  });
});
