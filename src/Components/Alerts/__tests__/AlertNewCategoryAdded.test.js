import React from "react";
import { shallow } from "enzyme";

import AlertNewCategoryAdded from "Components/Alerts/AlertNewCategoryAdded";

const props = { onClose: jest.fn() };

describe("'AlertNewCategoryAdded' component", () => {
  const alertNewCategoryAdded = shallow(<AlertNewCategoryAdded {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertNewCategoryAdded.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertNewCategoryAdded.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'New category added' text", () => {
    expect(alertNewCategoryAdded.find("Alert > span").text()).toBe(
      "New category added"
    );
  });
});
