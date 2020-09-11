import React from "react";
import { shallow } from "enzyme";

import ImageBox from "Components/Utility/SelectImage/ImageBox/ImageBox";
import { images } from "Data/fixtures";

const props = { ...images[0], onClick: jest.fn() };

describe("'ImageBox' component", () => {
  const imageBox = shallow(<ImageBox {...props} />);

  //Col
  it("render 'Col' component", () => {
    expect(imageBox.find("Col").exists()).toBe(true);
  });

  it("'Col' should contain proper props", () => {
    const desiredProps = {
      xs: "6",
      md: "4",
      className: "ImgWrapper",
      onClick: props.onClick,
    };
    expect(imageBox.find("Col").props()).toMatchObject(desiredProps);
  });

  it("should call 'onClick' callback", () => {
    imageBox.find("Col").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //Image
  it("render 'Image' component", () => {
    expect(imageBox.find("Image").exists()).toBe(true);
  });

  it("'Image' should contain proper props", () => {
    const desiredProps = {
      src: props.src,
      className: ["Img", props.active ? "Active" : null].join(" "),
    };
    expect(imageBox.find("Image").props()).toMatchObject(desiredProps);
  });

  it("When 'Image' is not active should not contain 'Active' class", () => {
    const imageBox = shallow(<ImageBox {...props} active={false} />);

    expect(imageBox.find("Image").hasClass("Active")).toBe(false);
  });
});
