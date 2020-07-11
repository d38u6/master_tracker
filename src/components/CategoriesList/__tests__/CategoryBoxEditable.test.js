import React from "react";
import { shallow } from "enzyme";

import { CategoryBoxEditable } from "../CategoryBoxEditable/CategoryBoxEditable";
import { categoryOne, categoryFormConf } from "../../../data/fixtures";

const props = { ...categoryOne };

describe("'CategoryBoxEditable' component", () => {
  const categoryBoxEditable = shallow(<CategoryBoxEditable {...props} />);

  //CategoryBox
  it("default render 'CategoryBox' component", () => {
    expect(categoryBoxEditable.find("CategoryBox").exists()).toBe(true);
  });

  it("Component 'CategoryBox' should contain proper props", () => {
    expect(categoryBoxEditable.find("CategoryBox").props()).toMatchObject(
      props
    );
  });

  describe("when click edit", () => {
    let categoryBoxEditable;
    beforeEach(() => {
      categoryBoxEditable = shallow(<CategoryBoxEditable {...props} />);
      categoryBoxEditable.find("CategoryBox").prop("onEditClick")();
    });

    //CategoryFormContainer
    it("render 'CategoryFormContainer' ", () => {
      expect(
        categoryBoxEditable.find("Connect(CategoryFormContainer)").exists()
      ).toBe(true);
    });

    it("Component 'CategoryFormContainer' should contain correct 'categoryId' prop", () => {
      expect(
        categoryBoxEditable
          .find("Connect(CategoryFormContainer)")
          .prop("categoryId")
      ).toBe(props.id);
    });

    //render prop in CategoryFormContainer
    it("render prop function in 'CategoryFormContainer', should render 'CategoryBox' div", () => {
      const wrapper = shallow(
        categoryBoxEditable
          .find("Connect(CategoryFormContainer)")
          .prop("render")(categoryFormConf)
      );
      expect(wrapper.find(".CategoryBox").exists()).toBe(true);
    });

    it("when click save, should again render 'CategoryBox'", () => {
      categoryBoxEditable
        .find("Connect(CategoryFormContainer)")
        .props()
        .onSave();
      expect(categoryBoxEditable.find("CategoryBox").exists()).toBe(true);
    });
  });
});
