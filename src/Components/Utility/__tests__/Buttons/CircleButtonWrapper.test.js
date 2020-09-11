import React from "react";
import { shallow } from "enzyme";

import CircleButtonWrapper from "Components/Utility/Buttons/CircleButtonWrapper/CircleButtonWrapper";

const props = { className: "testClassName" };

describe("'CircleButtonWrapper' component", () => {
  const circleButtonWrapper = shallow(<CircleButtonWrapper {...props} />);

  //div
  it("render 'div' element", () => {
    expect(circleButtonWrapper.find("div").exists()).toBe(true);
  });

  it("div element should contain proper class", () => {
    expect(circleButtonWrapper.find("div").hasClass(props.className)).toBe(
      true
    );
  });

  it("render without 'className' prop, div should contain only 'CircleButtonWrapper' class", () => {
    const circleButtonWrapper = shallow(<CircleButtonWrapper />);
    expect(
      circleButtonWrapper.find("div").hasClass("CircleButtonWrapper")
    ).toBe(true);
  });
});
