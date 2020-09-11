import React from "react";
import { shallow } from "enzyme";

import RemoveButtonCol from "Components/Utility/Buttons/RemoveButtonCol/RemoveButtonCol";

const props = { onClick: jest.fn() };

describe("'RemoveButtonCol' component", () => {
  const removeButtonCol = shallow(<RemoveButtonCol {...props} />);

  //td
  it("render 'td' element", () => {
    expect(removeButtonCol.find("td").exists()).toBe(true);
  });

  //Button
  it("render 'Button' component", () => {
    expect(removeButtonCol.find("Button").exists()).toBe(true);
  });

  it("Button' component should contain proper props", () => {
    const desiredProps = {
      variant: "danger",
      size: "sm",
      className: "RemoveButton",
      onClick: props.onClick,
    };
    expect(removeButtonCol.find("Button").props()).toMatchObject(desiredProps);
  });

  it("'Button' component should contain 'Remove' text", () => {
    expect(removeButtonCol.find("Button").text()).toMatch("Remove");
  });

  // Button > FaTrash
  it("inside 'Button' should render 'FaTrash' icon", () => {
    expect(removeButtonCol.find("Button > FaTrash").exists()).toBe(true);
  });

  it("'FaTrash' should contain 'Icon' class", () => {
    expect(removeButtonCol.find("Button > FaTrash").hasClass("Icon")).toBe(
      true
    );
  });

  it("should call onClick callback", () => {
    removeButtonCol.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
