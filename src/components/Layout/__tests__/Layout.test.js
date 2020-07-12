import React from "react";
import { shallow } from "enzyme";

import Layout from "../Layout";

describe("'Layout' component", () => {
  const layout = shallow(<Layout />);

  //Header
  it("render 'Header' component", () => {
    expect(layout.find("WithTheme(Header)").exists()).toBe(true);
  });

  //Content
  it("render 'Content' component", () => {
    expect(layout.find("Content").exists()).toBe(true);
  });
});
