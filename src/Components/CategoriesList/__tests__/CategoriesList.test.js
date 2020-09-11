import React from "react";
import { shallow } from "enzyme";

import CategoriesList from "Components/CategoriesList/CategoriesList";
import { categories, categoryFormConf } from "Data/fixtures";

const props = { categories, onAddClick: jest.fn() };

describe("'CategoriesList' component", () => {
  const categoriesList = shallow(<CategoriesList {...props} />);

  //Row
  it("render 'Row' component", () => {
    expect(categoriesList.find("Row").exists()).toBe(true);
  });

  //CategoryEditableContainer
  it("render correct number of 'CategoryEditableContainer' component", () => {
    expect(
      categoriesList.find("Connect(CategoryEditableContainer)").length
    ).toBe(props.categories.length);
  });

  categoriesList
    .find("Connect(CategoryEditableContainer)")
    .forEach((categoryEditableContainer, i) => {
      it(`should correctly pass 'categoryId' to 'CategoryFormContainer' for category ${i}`, () => {
        const categoryFormContainer = categoryEditableContainer.prop("render")({
          editMode: true,
        });
        expect(categoryFormContainer.props.categoryId).toBe(
          props.categories[i].id
        );
      });

      it(`should correctly pass 'category' props to 'CategoryBox' for category ${i}`, () => {
        const categoryBox = categoryEditableContainer.prop("render")({
          editMode: false,
        });
        expect(categoryBox.props).toMatchObject(props.categories[i]);
      });
    });

  //render prop in CategoryFormContainer
  it("render prop function in 'CategoryFormContainer', should render 'CategoryBox' div", () => {
    const wrapper = shallow(
      categoriesList
        .find("Connect(CategoryEditableContainer)")
        .at(0)
        .prop("render")({
          editMode: true,
        })
        .props.render(categoryFormConf)
    );
    expect(wrapper.find(".CategoryBox").exists()).toBe(true);
  });

  //AddButton
  it("render 'AddButton' component", () => {
    expect(categoriesList.find("AddButton").exists()).toBe(true);
  });

  it("should call 'onAddClick' callback", () => {
    categoriesList.find("AddButton").simulate("click");
    expect(props.onAddClick).toHaveBeenCalled();
  });
});
