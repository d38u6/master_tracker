import React from "react";
import { shallow } from "enzyme";

import TimeChartContainer from "../TimeChartContainer";
import menuItems from "../menuItems";
import { records } from "../../../data/fixtures";

const props = { records, render: jest.fn() };

describe("'TimeChartContainer' component", () => {
  const wrapper = shallow(<TimeChartContainer {...props} />);

  it("d38u6", () => {
    console.log(wrapper.debug());
  });
});
