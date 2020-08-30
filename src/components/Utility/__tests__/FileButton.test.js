import React from "react";
import * as ReactAll from "react";
import { shallow } from "enzyme";

import FileButton from "../FileButton/FileButton";

const props = { onChange: jest.fn(), variant: "primary" };

const mockRef = { current: { click: jest.fn() } };
ReactAll.useRef = jest.fn(() => mockRef);

describe("'FileButton' component", () => {
  const fileButton = shallow(<FileButton {...props} />);

  it("renders `input` element", () => {
    expect(fileButton.find("input").exists()).toBe(true);
  });

  it("`input` element should contain proper props", () => {
    const desiredProps = {
      style: { display: "none" },
      type: "file",
    };
    expect(fileButton.find("input").props()).toMatchObject(desiredProps);
  });

  it("renders `Button` component", () => {
    expect(fileButton.find("Button").exists()).toBe(true);
  });

  it("`Button` should contain props", () => {
    const { onChange, ...desiredProps } = props;
    expect(fileButton.find("Button").props()).toMatchObject(desiredProps);
  });

  it("should call 'onChange' callback", () => {
    fileButton.find("input").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  });

  it("when click on the button, should call 'click' fn on input ref", () => {
    fileButton.find("Button").simulate("click");
    expect(mockRef.current.click).toHaveBeenCalled();
  });
});
