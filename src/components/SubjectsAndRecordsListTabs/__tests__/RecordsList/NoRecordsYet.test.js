import React from "react";
import { shallow } from "enzyme";

import NoRecordsYet from "../../RecordsList/NoRecordsYet";

describe("'NoRecordsYet' component", () => {
  const wrapper = shallow(<NoRecordsYet />);

  it("render 'tr' element", () => {
    expect(wrapper.find("tr").exists()).toBe(true);
  });
  it("render 'td' element", () => {
    expect(wrapper.find("td").exists()).toBe(true);
  });
  it("'td' element should contain proper props", () => {
    const desiredProps = { colSpan: "4", style: { textAlign: "center" } };
    expect(wrapper.find("td").props()).toMatchObject(desiredProps);
  });
  it("'td' element should contain correct text", () => {
    expect(wrapper.find("td").text()).toBe("You don't have any records yet");
  });
});
