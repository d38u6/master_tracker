import reducer from "../categories/categories";
import * as actions from "../../actions/index";

import { categories, categoryOne } from "../../../data/fixtures";

describe("categories reducer", () => {
  it("should return default state with unknown action", () => {
    expect(reducer(categories, { type: "unknown" })).toBe(categories);
  });

  it("should set categories to state", () => {
    const state = reducer(undefined, actions.setCategories(categories));
    expect(state).toBe(categories);
  });

  it("should add new category to state", () => {
    const newCategory = { ...categoryOne, id: "newId" };
    const state = reducer(categories, actions.addCategory(newCategory));
    expect([...state].pop()).toBe(newCategory);
  });

  it("should edit category in state", () => {
    const categoryId = categories[0].id;
    const data = { title: "Edit Title", desc: "New Desc" };
    const state = reducer(categories, actions.editCategory(categoryId, data));
    const editedCategory = state.find(({ id }) => id === categoryId);

    expect(editedCategory).toStrictEqual({ ...categories[0], ...data });
  });

  it("should remove category from state", () => {
    const categoryId = categories[2].id;
    const state = reducer(categories, actions.removeCategory(categoryId));

    expect(state).toStrictEqual(
      categories.filter(({ id }) => id !== categoryId)
    );
  });
});
