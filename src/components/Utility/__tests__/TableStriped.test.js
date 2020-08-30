import React from "react";
import { shallow } from "enzyme";

import TableStriped from "../TableStriped/TableStriped";

const props = { className: "testClassName" };

describe("'TableStriped' component", () => {
  const tableStriped = shallow(<TableStriped {...props} />);

  //TableWithTheme
  it("render 'TableWithTheme' component", () => {
    expect(tableStriped.find("WithTheme(TableWithTheme)").exists()).toBe(true);
  });

  it("'TableWithTheme' should contain proper props", () => {
    const desiredProps = { striped: true, hover: true, size: "sm" };
    expect(
      tableStriped.find("WithTheme(TableWithTheme)").props()
    ).toMatchObject(desiredProps);
  });

  it("'TableWithTheme' should contain 'TableStriped' class", () => {
    expect(
      tableStriped.find("WithTheme(TableWithTheme)").hasClass("TableStriped")
    ).toBe(true);
  });

  it("'TableWithTheme' should contain transferred class in porp", () => {
    expect(
      tableStriped.find("WithTheme(TableWithTheme)").hasClass(props.className)
    ).toBe(true);
  });

  //tbody
  it("render 'tbody' element", () => {
    expect(tableStriped.find("tbody").exists()).toBe(true);
  });
});
