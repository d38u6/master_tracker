import React from "react";
import { shallow } from "enzyme";

import Alert from "../Alert/Alert";

const props = {
  variant: "success",
  onClose: jest.fn(),
  withoutTimeout: false,
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

  //close button div
  it("render 'div' with class 'CloseBtn'", () => {
    expect(alert.find("div").at(1).hasClass("CloseBtn")).toBe(true);
  });

  it("close button 'div' should contain 'x' text", () => {
    expect(alert.find("div").at(1).text()).toBe("x");
  });

  it("should call 'onClose' callback when clicked on the close button", () => {
    jest.clearAllMocks();
    alert.find("div").at(1).simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });

  describe("when 'variant' is undefined", () => {
    const alert = shallow(<Alert {...props} variant={undefined} />);
    it("alert 'div' should contain 'Primary' class", () => {
      expect(alert.find("div").at(0).hasClass("Primary")).toBe(true);
    });
  });

  describe("when 'withoutTimeout' is set to false", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<Alert {...props} withoutTimeout={false} />);
      useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should call 'onClose' callback after 'timeoutTime'", () => {
      jest.advanceTimersByTime(props.timeoutTime);
      expect(props.onClose).toHaveBeenCalled();
    });
  });

  describe("when 'withoutTimeout' is set to undefined", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<Alert {...props} withoutTimeout={undefined} />);
      useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should call 'onClose' callback after 'timeoutTime'", () => {
      jest.advanceTimersByTime(props.timeoutTime);
      expect(props.onClose).toHaveBeenCalled();
    });
  });

  describe("when 'withoutTimeout' is set to false and when 'timeoutTime' is undefined", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(
        <Alert {...props} withoutTimeout={false} timeoutTime={undefined} />
      );
      useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should call 'onClose' callback after 2,5s", () => {
      jest.advanceTimersByTime(4500);
      expect(props.onClose).toHaveBeenCalled();
    });
  });

  describe("with 'withoutTimeout'", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<Alert {...props} withoutTimeout={true} />);
      useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should not call 'onClose' callback", () => {
      jest.runAllTimers();
      expect(props.onClose).not.toBeCalled();
    });
  });

  describe("when click a close button, before elapsed 'timeoutTime' time", () => {
    let alert;
    let fakeUnmount;
    beforeEach(() => {
      jest.clearAllMocks();
      alert = shallow(<Alert {...props} />);
      fakeUnmount = useEffect();
    });

    afterEach(() => jest.clearAllTimers());

    it("should call 'onClose' callback only once", () => {
      alert.find("div").at(1).simulate("click");
      fakeUnmount();
      jest.runAllTimers();
      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
