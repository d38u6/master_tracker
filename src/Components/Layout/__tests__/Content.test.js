import React from "react";
import { shallow } from "enzyme";

import Content from "Components/Layout/Content/Content";

describe("'Content' component", () => {
  const content = shallow(<Content />);

  //Container
  it("render 'Container' component", () => {
    expect(content.find("Container").exists()).toBe(true);
  });

  it("'Container' should contain 'Content' class", () => {
    expect(content.find("Container").hasClass("Content")).toBe(true);
  });
});
