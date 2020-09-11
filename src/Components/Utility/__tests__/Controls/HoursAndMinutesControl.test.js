import React from "react";
import { shallow } from "enzyme";

import HoursAndMinutesControl from "Components/Utility/Controls/HoursAndMinutesControl/HoursAndMinutesControl";

const props = {
  hoursConf: { value: 0, onChange: jest.fn() },
  minConf: { value: 0, onChange: jest.fn() },
  withMinMax: true,
};

describe("'HoursAndMinutesControl' component", () => {
  const hoursAndMinutesControl = shallow(<HoursAndMinutesControl {...props} />);

  //Hours TimeControl
  it("render 'TimeControl' componetn with 'Hours' label", () => {
    expect(hoursAndMinutesControl.find("TimeControl").at(0).prop("label")).toBe(
      "Hours"
    );
  });

  it("Hours 'TimeControl' should contain correctly 'value'", () => {
    expect(hoursAndMinutesControl.find("TimeControl").at(0).prop("value")).toBe(
      props.hoursConf.value
    );
  });

  it("Hours 'TimeControl' should contain proper 'min' and 'max' props", () => {
    expect(
      hoursAndMinutesControl.find("TimeControl").at(0).props()
    ).toMatchObject({
      min: "0",
      max: "23",
    });
  });

  it("Hours 'TimeControl' should contain empty proper 'min' and 'max' props", () => {
    const hoursAndMinutesControl = shallow(
      <HoursAndMinutesControl {...props} withMinMax={false} />
    );
    expect(
      hoursAndMinutesControl.find("TimeControl").at(0).props()
    ).toMatchObject({
      min: "",
      max: "",
    });
  });

  it("should call 'onChange' callback for hours", () => {
    hoursAndMinutesControl.find("TimeControl").at(0).simulate("change");
    expect(props.hoursConf.onChange).toHaveBeenCalled();
  });

  //Minutes TimeControl
  it("render 'TimeControl' componetn with 'Minutes' label", () => {
    expect(hoursAndMinutesControl.find("TimeControl").at(1).prop("label")).toBe(
      "Minutes"
    );
  });

  it("Minutes 'TimeControl' should contain correctly 'value'", () => {
    expect(hoursAndMinutesControl.find("TimeControl").at(1).prop("value")).toBe(
      props.minConf.value
    );
  });

  it("Minutes 'TimeControl' should contain proper 'min' and 'max' props", () => {
    expect(
      hoursAndMinutesControl.find("TimeControl").at(1).props()
    ).toMatchObject({
      min: "0",
      max: "59",
    });
  });

  it("Minutes 'TimeControl' should contain empty proper 'min' and 'max' props", () => {
    const hoursAndMinutesControl = shallow(
      <HoursAndMinutesControl {...props} withMinMax={false} />
    );
    expect(
      hoursAndMinutesControl.find("TimeControl").at(1).props()
    ).toMatchObject({
      min: "",
      max: "",
    });
  });

  it("should call 'onChange' callback for minutes", () => {
    hoursAndMinutesControl.find("TimeControl").at(1).simulate("change");
    expect(props.minConf.onChange).toHaveBeenCalled();
  });
});
