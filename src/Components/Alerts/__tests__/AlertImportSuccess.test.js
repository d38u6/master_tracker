import React from "react";
import { shallow } from "enzyme";

import AlertImportSuccess from "Components/Alerts/AlertImportSuccess";

const props = { onClose: jest.fn() };

describe("'AlertImportSuccess' component", () => {
  const alertImportSuccess = shallow(<AlertImportSuccess {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertImportSuccess.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertImportSuccess.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Data Imported Successfully' text", () => {
    expect(alertImportSuccess.find("Alert > span").text()).toBe(
      "Data Imported Successfully"
    );
  });
});
