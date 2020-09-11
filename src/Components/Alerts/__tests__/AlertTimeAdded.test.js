import React from "react";
import { shallow } from "enzyme";

import AlertTimeAdded from "Components/Alerts/AlertTimeAdded";

const props = { onClose: jest.fn() };

describe("'AlertTimeAdded' component", () => {
  const alertTimeAdded = shallow(<AlertTimeAdded {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertTimeAdded.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertTimeAdded.find("Alert").props()).toMatchObject(desiredProps);
  });

  it("'Alert' component should contain 'Time Added' text", () => {
    expect(alertTimeAdded.find("Alert > span").text()).toBe("Time Added");
  });
});
