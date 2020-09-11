import React from "react";
import { shallow } from "enzyme";

import AlertRecordRemoved from "Components/Alerts/AlertRecordRemoved";

const props = { onClose: jest.fn() };

describe("'AlertRecordRemoved' component", () => {
  const alertRecordRemoved = shallow(<AlertRecordRemoved {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertRecordRemoved.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "primary",
      onClose: props.onClose,
    };
    expect(alertRecordRemoved.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Category Removed' text", () => {
    expect(alertRecordRemoved.find("Alert > span").text()).toBe(
      "Record Removed"
    );
  });
});
