import React from "react";
import { shallow } from "enzyme";

import CategoriesList from "../CategoriesList";
import { categories } from "../../../data/fixtures";

const props = { categories, onAddClick: jest.fn(), pickCategory: jest.fn() };

describe("'CategoriesList' component", () => {
  const categoiresList = shallow(<CategoriesList {...props} />);

  //Row
  it("render 'Row' component", () => {
    expect(categoiresList.find("Row").exists()).toBe(true);
  });

  //CategoryBoxEditable
  it("render correct number of 'CategoryBoxEditable' component", () => {
    expect(categoiresList.find("Memo(CategoryBoxEditable)").length).toBe(
      props.categories.length
    );
  });

  categoiresList
    .find("Memo(CategoryBoxEditable)")
    .forEach((categoryBoxEditable, i) => {
      it(`Component 'CategoryBoxEditable' ${i}, should containt proper props`, () => {
        expect(categoryBoxEditable.props()).toMatchObject(props.categories[i]);
      });

      it(`Component 'CategoryBoxEditable' ${i}, should containt 'onPickCategory' callback`, () => {
        expect(categoryBoxEditable.prop("onPickCategory")).toBe(
          props.pickCategory
        );
      });
    });

  //AddButton
  it("render 'AddButton' component", () => {
    expect(categoiresList.find("AddButton").exists()).toBe(true);
  });

  it("should call 'onAddClick' callback", () => {
    categoiresList.find("AddButton").simulate("click");
    expect(props.onAddClick).toHaveBeenCalled();
  });
});
