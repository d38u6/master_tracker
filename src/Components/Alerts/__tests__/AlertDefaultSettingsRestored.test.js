import React from "react";
import { shallow } from "enzyme";

import AlertDefaultSettingsRestored from "Components/Alerts/AlertDefaultSettingsRestored";

const props = { onClose: jest.fn() };

describe("'AlertDefaultSettingsRestored' component", () => {
  const alertDefaultSettingsRestored = shallow(
    <AlertDefaultSettingsRestored {...props} />
  );

  //Alert
  it("render 'Alert' component", () => {
    expect(alertDefaultSettingsRestored.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertDefaultSettingsRestored.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Default Settings Restored Successful' text", () => {
    expect(alertDefaultSettingsRestored.find("Alert > span").text()).toBe(
      "Default Settings Restored Successful"
    );
  });
});
