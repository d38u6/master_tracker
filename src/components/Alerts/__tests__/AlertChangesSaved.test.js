import React from "react";
import { shallow } from "enzyme";

import AlertChangesSaved from "../AlertChangesSaved";

const props = { onClose: jest.fn() };

describe("'AlertChangesSaved' component", () => {
  const alertChangesSaved = shallow(<AlertChangesSaved {...props} />);

  //Alert
  it("render 'Alert' component", () => {
    expect(alertChangesSaved.find("Alert").exists()).toBe(true);
  });

  it("'Alert' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      onClose: props.onClose,
    };
    expect(alertChangesSaved.find("Alert").props()).toMatchObject(desiredProps);
  });

  it("'Alert' component should contain 'Changes Saved' text", () => {
    expect(alertChangesSaved.find("Alert > span").text()).toBe("Changes Saved");
  });
});
