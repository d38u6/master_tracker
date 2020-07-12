import React from "react";
import { shallow } from "enzyme";

import CircleButtonWrapper from "../../CategoryBox/CircleButtonWrapper/CircleButtonWrapper";

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
});
