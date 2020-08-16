import React from "react";
import { shallow } from "enzyme";

import AlertCategoryRemoved from "../AlertCategoryRemoved";

const props = { onClose: jest.fn() };

describe("'AlertCategoryRemoved' component", () => {
  const alertCategoryRemoved = shallow(<AlertCategoryRemoved {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertCategoryRemoved.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "primary",
      onClose: props.onClose,
    };
    expect(alertCategoryRemoved.find("Alert").props()).toMatchObject(
      desiredProps
    );
  });

  it("'Alert' component should contain 'Category Removed' text", () => {
    expect(alertCategoryRemoved.find("Alert > span").text()).toBe(
      "Category Removed"
    );
  });
});
