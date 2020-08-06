import React from "react";
import { shallow } from "enzyme";

import Widget from "../../Widget/Widget";
import classes from "../../Widget/Widget.module.css";

const props = {
  name: "test name",
  className: "testClassName",
  md: "6",
  lg: "4",
};

describe("'Widget' component", () => {
  const widget = shallow(
    <Widget {...props}>
      <div className="child"></div>
    </Widget>
  );

  //Col
  it("render 'Col' component", () => {
    expect(widget.find("Col").exists()).toBe(true);
  });

  it("'Col' component should contain proper props", () => {
    const { name, className, ...rest } = props;
    expect(widget.find("Col").props()).toMatchObject(rest);
  });

  it("'Col' component should contain 'Widget' class", () => {
    expect(widget.find("Col").hasClass("Widget")).toBe(true);
  });

  it("'Col' component should contain proper inject class", () => {
    expect(widget.find("Col").hasClass(props.className)).toBe(true);
  });

  it("when prop className not exist, 'Col' component should contain empty class", () => {
    const widget = shallow(<Widget {...props} className={null} />);
    expect(widget.find("Col").hasClass("")).toBe(true);
  });

  //span
  it("render 'span' element", () => {
    expect(widget.find("span").exists()).toBe(true);
  });

  it("'span' should contain 'Name' class", () => {
    expect(widget.find("span").hasClass("Name")).toBe(true);
  });

  it("text inside 'span' element should be correctly", () => {
    expect(widget.find("span").text()).toBe(props.name);
  });

  //children
  it("should enrcih children to 'classes' prop", () => {
    const childProps = widget.find(".child").props();
    expect(childProps.hasOwnProperty("classes")).toBe(true);
  });
});
