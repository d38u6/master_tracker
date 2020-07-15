import * as actions from "../categories/categories";
import {
  SET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
} from "../types";

import { categories, categoryThree, categoryOne } from "../../../data/fixtures";

describe("categories actions", () => {
  describe("creates an action to set categories", () => {
    let action;
    beforeEach(() => {
      action = actions.setCategories(categories);
    });

    it("action should contain correctly type `SET_CATEGORIES`", () => {
      expect(action.type).toEqual(SET_CATEGORIES);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(categories);
    });
  });

  describe("creates an action to add category", () => {
    let action;
    beforeEach(() => {
      action = actions.addCategory(categoryThree);
    });

    it("action should contain correctly type `ADD_CATEGORY`", () => {
      expect(action.type).toEqual(ADD_CATEGORY);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(categoryThree);
    });
  });

  describe("creates an action to edit category", () => {
    let action;
    const data = { title: categoryOne.title, desc: categoryOne.desc };
    beforeEach(() => {
      action = actions.editCategory(categoryThree.id, data);
    });

    it("action should contain correctly type `EDIT_CATEGORY`", () => {
      expect(action.type).toEqual(EDIT_CATEGORY);
    });

    it("action should contain proper payload categroyId property", () => {
      expect(action.payload.categoryId).toBe(categoryThree.id);
    });

    it("action should contain proper payload data property", () => {
      expect(action.payload.data).toBe(data);
    });
  });

  describe("creates an action to remove category", () => {
    let action;
    beforeEach(() => {
      action = actions.removeCategory(categoryThree.id);
    });

    it("action should contain correctly type `REMOVE_CATEGORY`", () => {
      expect(action.type).toEqual(REMOVE_CATEGORY);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(categoryThree.id);
    });
  });
});
