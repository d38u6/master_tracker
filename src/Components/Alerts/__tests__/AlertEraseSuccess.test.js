import React from "react";
import { shallow } from "enzyme";

import AlertEraseSuccess from "Components/Alerts/AlertEraseSuccess";

const props = { onClose: jest.fn() };

describe("'AlertEraseSuccess' component", () => {
  const alertEraseSuccess = shallow(<AlertEraseSuccess {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertEraseSuccess.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertEraseSuccess.find("Alert").props()).toMatchObject(desiredProps);
  });

  it("'Alert' component should contain 'Data Exported Successfully' text", () => {
    expect(alertEraseSuccess.find("Alert > span").text()).toBe(
      "Your data now is erased"
    );
  });
});
