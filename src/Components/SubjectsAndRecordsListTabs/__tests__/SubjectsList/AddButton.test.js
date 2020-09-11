import React from "react";
import { shallow } from "enzyme";

import AddButton from "Components/SubjectsAndRecordsListTabs/SubjectsList/AddButton/AddButton";

const props = { onClick: jest.fn() };

describe("'AddButton' component", () => {
  const addButton = shallow(<AddButton {...props} />);

  //RowButton
  it("render 'RowButton' component", () => {
    expect(addButton.find("RowButton").exists()).toBe(true);
  });

  it("RowButton' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClick: props.onClick,
    };
    expect(addButton.find("RowButton").props()).toMatchObject(desiredProps);
  });

  //span
  it("render 'span' element", () => {
    expect(addButton.find("span").exists()).toBe(true);
  });

  it("'span' element should contain 'Add New' text", () => {
    expect(addButton.find("span").text()).toBe("Add New");
  });

  // Button > BsPlus
  it("inside 'RowButton' should render 'BsPlus' icon", () => {
    expect(addButton.find("RowButton > BsPlus").exists()).toBe(true);
  });

  it("'BsPlus' should contain 'Icon' class", () => {
    expect(addButton.find("RowButton > BsPlus").hasClass("Icon")).toBe(true);
  });

  it("should call onClick callback", () => {
    addButton.find("RowButton").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
