import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";

import { CategoriesListContainer } from "../CategoriesListContainer";
import { categories, categoryFour } from "../../../data/fixtures";
import { initialCategories, newCategory } from "../../../data/categories";
import { saveCategories } from "../../../utility/localStorageManager/localStorageManager";

const props = {
  categories,
  setCategories: jest.fn(),
  addCategory: jest.fn(),
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

    it("and when 'categories' in localStorage exists, should call 'setCategories' with 'categories' from localStorage", () => {
      saveCategories([categoryFour]);
      jest.clearAllMocks();
      useEffect();
      expect(props.setCategories).toHaveBeenCalledWith([categoryFour]);
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
});
