import React from "react";
import { shallow } from "enzyme";

import ImageButton from "../../Buttons/ImageButton/ImageButton";

const props = { onClick: jest.fn() };

describe("'ImageButton' component", () => {
  const imageButton = shallow(<ImageButton {...props} />);

  //div
  it("render 'div' element", () => {
    expect(imageButton.find("div").exists()).toBe(true);
  });

  it("'should' contain 'ImageButton' class", () => {
    expect(imageButton.find("div").hasClass("ImageButton")).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    imageButton.find("div").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //BsCardImage icon
  it("render 'BsCardImage' icon inside 'div'", () => {
    expect(imageButton.find("div > BsCardImage").exists()).toBe(true);
  });
});
