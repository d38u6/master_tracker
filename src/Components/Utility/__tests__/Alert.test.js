import React from "react";
import { shallow } from "enzyme";

import Alert from "Components/Utility/Alert/Alert";

const props = {
  variant: "success",
  onClose: jest.fn(),
  timeoutTime: 250,
};
jest.useFakeTimers();
let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

describe("'Alert' component", () => {
  const alert = shallow(<Alert {...props} />);

  //alert div
  it("render 'div' with class 'Alert'", () => {
    expect(alert.find("div").at(0).hasClass("Alert")).toBe(true);
  });

  it("alert 'div' should contain correctly variant class", () => {
    expect(
      alert
        .find("div")
        .at(0)
        .hasClass(props.variant[0].toUpperCase() + props.variant.slice(1))
    ).toBe(true);
  });

  it("render 'span' element for icon", () => {
    expect(alert.find("span").hasClass("Icon")).toBe(true);
  });

  it("render 'div' element for content", () => {
    expect(alert.find("div").at(1).hasClass("Content")).toBe(true);
  });

  describe("when 'variant' is undefined", () => {
    const alert = shallow(<Alert {...props} variant={undefined} />);
    it("alert 'div' should contain 'Primary' class", () => {
      expect(alert.find("div").at(0).hasClass("Primary")).toBe(true);
    });
  });

  it("should call 'onClose' callback after 'timeoutTime'", () => {
    jest.clearAllMocks();
    useEffect();
    jest.advanceTimersByTime(props.timeoutTime);
    expect(props.onClose).toHaveBeenCalled();
  });

  describe("when 'timeoutTime' is undefined", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<Alert {...props} timeoutTime={undefined} />);
      useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should call 'onClose' callback after 2,5s", () => {
      jest.advanceTimersByTime(2500);
      expect(props.onClose).toHaveBeenCalled();
    });
  });
});
