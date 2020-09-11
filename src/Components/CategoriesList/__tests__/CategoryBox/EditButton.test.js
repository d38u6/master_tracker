import React from "react";
import { shallow } from "enzyme";

import EditButton from "Components/CategoriesList/CategoryBox/EditButton/EditButton";

const props = { className: "testClassName", onClick: jest.fn() };

describe("'EditButton' component", () => {
  const editButton = shallow(<EditButton {...props} />);

  //CircleButtonWrapper
  it("render 'CircleButtonWrapper' component", () => {
    expect(editButton.find("CircleButtonWrapper").exists()).toBe(true);
  });

  it("'CircleButtonWrapper' should contain proper class", () => {
    expect(
      editButton.find("CircleButtonWrapper").hasClass(props.className)
    ).toBe(true);
  });

  it("'CircleButtonWrapper' should contain proper class", () => {
    expect(
      editButton.find("CircleButtonWrapper").hasClass(props.className)
    ).toBe(true);
  });

  it("render without 'className' prop, 'CircleButtonWrapper' should not contain class", () => {
    const editButton = shallow(<EditButton />);
    expect(
      expect(editButton.find("CircleButtonWrapper").hasClass("")).toBe(true)
    );
  });

  //EditButton (Button)
  it("render 'EditButton' component", () => {
    expect(editButton.find("EditButton").exists()).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    editButton.find("EditButton").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
