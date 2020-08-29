import React from "react";
import { shallow } from "enzyme";

import AlertExportSuccess from "../AlertExportSuccess";

const props = { onClose: jest.fn() };

describe("'AlertExportSuccess' component", () => {
  const alertExportSuccess = shallow(<AlertExportSuccess {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertExportSuccess.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertExportSuccess.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Data Exported Successfully' text", () => {
    expect(alertExportSuccess.find("Alert > span").text()).toBe(
      "Data Exported Successfully"
    );
  });
});
