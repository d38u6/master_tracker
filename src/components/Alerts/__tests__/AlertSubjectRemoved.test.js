import React from "react";
import { shallow } from "enzyme";

import AlertSubjectRemoved from "../AlertSubjectRemoved";

const props = { onClose: jest.fn() };

describe("'AlertSubjectRemoved' component", () => {
  const alertSubjectRemoved = shallow(<AlertSubjectRemoved {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertSubjectRemoved.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "primary",
      onClose: props.onClose,
    };
    expect(alertSubjectRemoved.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Category Removed' text", () => {
    expect(alertSubjectRemoved.find("Alert > span").text()).toBe(
      "Subject Removed"
    );
  });
});
