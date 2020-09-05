import React from "react";
import { shallow } from "enzyme";

import ApplyButton from "../../Buttons/ApplyButton/ApplyButton";

const props = { onClick: jest.fn(), className: "testClassName" };

describe("'ApplyButton' component", () => {
  const applyButton = shallow(<ApplyButton {...props} />);

  //div
  it("render 'div' element", () => {
    expect(applyButton.find("div").exists()).toBe(true);
  });

  it("'div' should contain 'ApplyButton' class", () => {
    expect(applyButton.find("div").hasClass("ApplyButton")).toBe(true);
  });

  it("'div' should contain proper class", () => {
    expect(applyButton.find("div").hasClass(props.className)).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    applyButton.find("div").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //FaCheck icon
  it("render 'FaCheck' icon inside 'div'", () => {
    expect(applyButton.find("div > FaCheck").exists()).toBe(true);
  });
});
