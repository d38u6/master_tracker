import React from "react";
import { shallow } from "enzyme";

import AlertNewSubjectAdded from "Components/Alerts/AlertNewSubjectAdded";

const props = { onClose: jest.fn() };

describe("'AlertNewSubjectAdded' component", () => {
  const alertNewSubjectAdded = shallow(<AlertNewSubjectAdded {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertNewSubjectAdded.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertNewSubjectAdded.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'New category added' text", () => {
    expect(alertNewSubjectAdded.find("Alert > span").text()).toBe(
      "New Subject Added"
    );
  });
});
