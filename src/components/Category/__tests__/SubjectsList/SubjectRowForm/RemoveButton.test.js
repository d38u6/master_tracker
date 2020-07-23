import React from "react";
import { shallow } from "enzyme";

import RemoveButton from "../../../SubjectsList/SubjectRowForm/RemoveButton/RemoveButton";

const props = { onClick: jest.fn() };

describe("'RemoveButton' component", () => {
  const removeButton = shallow(<RemoveButton {...props} />);

  //td
  it("render 'td' element", () => {
    expect(removeButton.find("td").exists()).toBe(true);
  });

  //Button
  it("render 'Button' component", () => {
    expect(removeButton.find("Button").exists()).toBe(true);
  });

  it("Button' component should contain proper props", () => {
    const desiredProps = {
      variant: "danger",
      size: "sm",
      className: "RemoveButton",
      onClick: props.onClick,
    };
    expect(removeButton.find("Button").props()).toMatchObject(desiredProps);
  });

  it("'Button' component should contain 'Remove' text", () => {
    expect(removeButton.find("Button").text()).toMatch("Remove");
  });

  // Button > FaTrash
  it("inside 'Button' should render 'FaTrash' icon", () => {
    expect(removeButton.find("Button > FaTrash").exists()).toBe(true);
  });

  it("'FaTrash' should contain 'Icon' class", () => {
    expect(removeButton.find("Button > FaTrash").hasClass("Icon")).toBe(true);
  });

  it("should call onClick callback", () => {
    removeButton.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
