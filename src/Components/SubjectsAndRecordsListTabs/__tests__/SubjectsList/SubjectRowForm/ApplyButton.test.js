import React from "react";
import { shallow } from "enzyme";

import ApplyButton from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRowForm/ApplyButton/ApplyButton";

const props = { onClick: jest.fn() };

describe("'ApplyButton' component", () => {
  const applyButton = shallow(<ApplyButton {...props} />);

  //td
  it("render 'td' element", () => {
    expect(applyButton.find("td").exists()).toBe(true);
  });

  it("'td' element should contain 'ApplyButton' class", () => {
    expect(applyButton.find("td").hasClass("ApplyButton")).toBe(true);
  });

  //div
  it("render 'div' element", () => {
    expect(applyButton.find("div").exists()).toBe(true);
  });

  it("'div' element should contain proper props", () => {
    const desiredProps = { className: "Button", onClick: props.onClick };
    expect(applyButton.find("div").props()).toMatchObject(desiredProps);
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
