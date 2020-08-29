import React from "react";
import { shallow } from "enzyme";

import AlertWrongFile from "../AlertWrongFile";

const props = { onClose: jest.fn() };

describe("'AlertWrongFile' component", () => {
  const alertWrongFile = shallow(<AlertWrongFile {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertWrongFile.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "danger",
      onClose: props.onClose,
    };
    expect(alertWrongFile.find("Alert").props()).toMatchObject(desiredProps);
  });

  it("'Alert' component should contain 'You chose wrong file, choose correct file and try again' text", () => {
    expect(alertWrongFile.find("Alert > span").text()).toBe(
      "You chose wrong file, choose correct file and try again"
    );
  });
});
