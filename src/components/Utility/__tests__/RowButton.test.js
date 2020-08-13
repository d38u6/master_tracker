import React from "react";
import { shallow } from "enzyme";

import RowButton from "../RowButton/RowButton";

const props = { variant: "success", onClick: jest.fn() };

describe("'RowButton' component", () => {
  const rowButton = shallow(<RowButton {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(rowButton.find("tr").exists()).toBe(true);
  });

  it("'tr' element should contain 'RowButton' class", () => {
    expect(rowButton.find("tr").hasClass("RowButton")).toBe(true);
  });

  //td
  it("render 'td' element", () => {
    expect(rowButton.find("td").exists()).toBe(true);
  });

  it("'td' element should contain proper props", () => {
    const desiredProps = { colSpan: "4" };
    expect(rowButton.find("td").props()).toMatchObject(desiredProps);
  });

  //Button
  it("render 'Button' component", () => {
    expect(rowButton.find("Button").exists()).toBe(true);
  });

  it("Button' component should contain proper props", () => {
    const desiredProps = {
      variant: props.variant,
      size: "sm",
      className: "Button",
      onClick: props.onClick,
    };
    expect(rowButton.find("Button").props()).toMatchObject(desiredProps);
  });

  it("should call onClick callback", () => {
    rowButton.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  describe("when variant is undefined", () => {
    const rowButton = shallow(<RowButton {...props} variant={undefined} />);

    it("render 'Button' with 'primary' variant", () => {
      expect(rowButton.find("Button").prop("variant")).toBe("primary");
    });
  });
});
