import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";

import { CategoriesListContainer } from "../CategoriesListContainer";
import { categories } from "../../../data/fixtures";
import { initialCategories, newCategory } from "../../../data/categories";

const props = {
  categories,
  setCategories: jest.fn(),
  addCategory: jest.fn(),
  pickCategory: jest.fn(),
  render: jest.fn(),
};
let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

describe("'CategoriesListContainer' component", () => {
  describe("when 'categories' length is greater than 0", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoriesListContainer {...props} />);
      useEffect();
    });

    it("should call 'render' function with 'categories'", () => {
      expect(props.render.mock.calls[0][0].categories).toBe(props.categories);
    });

    it("should call 'render' function with 'addCategory' function", () => {
      expect(typeof props.render.mock.calls[0][0].addCategory).toBe("function");
    });

    it("should call 'render' function with 'pickCategory' function", () => {
      expect(typeof props.render.mock.calls[0][0].pickCategory).toBe(
        "function"
      );
    });

    it("should not call 'setCategories' callback", () => {
      expect(props.setCategories).toHaveBeenCalledTimes(0);
    });
  });

  describe("when 'categories' length is less than 1", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoriesListContainer {...props} categories={[]} />);
      useEffect();
    });

    it("should call 'setCategories' callback with initialCategories", () => {
      expect(props.setCategories).toHaveBeenCalledWith(initialCategories);
    });
  });

  //addCategory
  it("should call 'addCategory' callback with newCategory", () => {
    shallow(<CategoriesListContainer {...props} />);
    props.render.mock.calls[0][0].addCategory();
    expect(props.addCategory.mock.calls[0][0]).toMatchObject(newCategory);
  });

  it("should create valid id for newCategory", () => {
    shallow(<CategoriesListContainer {...props} />);
    props.render.mock.calls[0][0].addCategory();

    const id = props.addCategory.mock.calls[0][0].id;
    expect(shortid.isValid(id)).toBe(true);
  });

  //pickCategory
  it("should call 'pickCategory' callback with categoryId", () => {
    const categoryId = "testId";
    shallow(<CategoriesListContainer {...props} />);
    props.render.mock.calls[0][0].pickCategory(categoryId);
    expect(props.pickCategory.mock.calls[0][0]).toBe(categoryId);
  });
});
