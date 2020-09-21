import React from "react";
import { shallow } from "enzyme";

import { DateTimePickerWithTheme } from "Components/Utility/WithTheme/DateTimePickerWithTheme/DateTimePickerWithTheme";
import { theme } from "Data/fixtures";

const props = { theme };
const themeClassName =
  props.theme.bg.charAt(0).toUpperCase() + props.theme.bg.slice(1);

describe("'DateTimePickerWithTheme' component", () => {
  const dateTimePickerWithTheme = shallow(
    <DateTimePickerWithTheme {...props} />
  );

  //DateTimePicker
  it("render 'DateTimePicker' component", () => {
    expect(dateTimePickerWithTheme.find("DateTimePicker").exists()).toBe(true);
  });

  it("'DateTimePicker' component should have class depending on the theme", () => {
    expect(
      dateTimePickerWithTheme.find("DateTimePicker").hasClass(themeClassName)
    ).toBe(true);
  });

  it("'DateTimePicker' component should have calendar class depending on the theme", () => {
    expect(
      dateTimePickerWithTheme.find("DateTimePicker").prop("calendarClassName")
    ).toMatch(themeClassName);
  });
});
