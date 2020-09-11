import React from "react";
import { shallow } from "enzyme";

import { TableWithTheme } from "Components/Utility/WithTheme/TableWithTheme/TableWithTheme";
import { theme } from "Data/fixtures";

const props = { theme, tableProps: "example", diffrentProp: "example" };

describe("'TableWithTheme' component", () => {
  const tableWithTheme = shallow(<TableWithTheme {...props} />);

  //ForwardRef
  it("render 'ForwardRef' component", () => {
    expect(tableWithTheme.find("ForwardRef").exists()).toBe(true);
  });

  it("'ForwardRef' component should contain proper props", () => {
    const { theme, ...desiredProps } = props;
    expect(tableWithTheme.find("ForwardRef").props()).toMatchObject(
      desiredProps
    );
  });

  it("when 'className' prop exists, 'ForwardRef' should contain this class", () => {
    const className = "exampleClassName";
    expect(
      shallow(<TableWithTheme {...props} className={className} />)
        .find("ForwardRef")
        .hasClass(className)
    ).toBe(true);
  });

  it("'ForwardRef' should contain proper theme class", () => {
    const themeClassName =
      props.theme.bg.charAt(0).toUpperCase() + props.theme.bg.slice(1);

    expect(tableWithTheme.find("ForwardRef").hasClass(themeClassName)).toBe(
      true
    );
  });
});
