import React from "react";
import { shallow } from "enzyme";

import Home from "../Home";
import { categories } from "../../data/fixtures";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
const addCategory = jest.fn();

describe("'Home' component", () => {
  const home = shallow(<Home />);

  //CategoriesListContainer
  it("render 'CategoriesListContainer'", () => {
    expect(home.find("Connect(CategoriesListContainer)").exists()).toBe(true);
  });

  describe("render prop, inside 'CategoriesListContainer'", () => {
    let wrapper;
    beforeEach(() => {
      const renderProp = home
        .find("Connect(CategoriesListContainer)")
        .prop("render");
      wrapper = renderProp({ categories, addCategory });
    });

    it("render 'CategoriesList' with proper props", () => {
      expect(wrapper).toStrictEqual(
        <CategoriesList categories={categories} onAddClick={addCategory} />
      );
    });
  });
});
