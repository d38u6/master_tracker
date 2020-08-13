import React from "react";
import { shallow } from "enzyme";

import Tab from "../Tab";

const props = { title: "test" };

describe("'Tab' component", () => {
  const wrapper = shallow(<Tab {...props} />);

  it("should render nothing", () => {
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
