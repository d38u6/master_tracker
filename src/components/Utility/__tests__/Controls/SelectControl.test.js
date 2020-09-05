import React from "react";
import { shallow } from "enzyme";

import SelectControl from "../../Controls/SelectControl/SelectControl";
import { goalChartTypesOption } from "../../../../data/fixtures";

const props = {
  value: goalChartTypesOption[0].id,
  options: goalChartTypesOption,
  onChange: jest.fn(),
};

describe("'SelectControl' component", () => {
  const selectControl = shallow(<SelectControl {...props} />);

  //FormControl
  it("render 'FormControl' component", () => {
    expect(selectControl.find("FormControl").exists()).toBe(true);
  });
  it("'FormControl' component should contain proper props", () => {
    const desiredProps = {
      as: "select",
      onChange: props.onChange,
      value: props.value,
      custom: true,
    };
    expect(selectControl.find("FormControl").props()).toMatchObject(
      desiredProps
    );
  });
  it("should call 'onChange' callback", () => {
    selectControl.find("FormControl").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  });

  //options
  it("render correct number of 'option' elements", () => {
    expect(selectControl.find("option").length).toBe(props.options.length);
  });
  selectControl.find("option").forEach((opt, i) => {
    it(`'option' element ${i + 1} should contain correct 'value' prop`, () => {
      expect(opt.prop("value")).toBe(props.options[i].value);
    });
    it(`'option' element ${
      i + 1
    } should contain correct 'caption' text`, () => {
      expect(opt.text()).toBe(props.options[i].caption);
    });
  });
});
