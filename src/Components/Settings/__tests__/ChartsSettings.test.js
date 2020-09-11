import React from "react";
import { shallow } from "enzyme";

import ChartsSettings from "Components/Settings/ChartsSettings/ChartsSettings";
import { goalChartTypesOption, timeChartTypesOption } from "Data/fixtures";

const props = {
  goalChart: {
    value: goalChartTypesOption[0].id,
    options: goalChartTypesOption,
    onChange: jest.fn(),
  },
  timeChart: {
    value: timeChartTypesOption[0].id,
    options: timeChartTypesOption,
    onChange: jest.fn(),
  },
  saveChanges: jest.fn(),
};

describe("'ChartsSettings' component", () => {
  const chartsSettings = shallow(<ChartsSettings {...props} />);

  //SettingsWrapper
  it("render 'SettingsWrapper' component", () => {
    expect(chartsSettings.find("SettingsWrapper").exists()).toBe(true);
  });

  //SettingsHeader
  it("render 'SettingsHeader' component", () => {
    expect(chartsSettings.find("SettingsHeader").exists()).toBe(true);
  });
  it("'SettingsHeader' component should contain 'Charts Settings' title prop", () => {
    expect(chartsSettings.find("SettingsHeader").prop("title")).toBe(
      "Charts Settings"
    );
  });

  //SettingForms
  it("render two 'SettingForm' components", () => {
    expect(chartsSettings.find("SettingForm").length).toBe(2);
  });

  //SelectControls
  it("render two 'SelectControl' components", () => {
    expect(chartsSettings.find("SelectControl").length).toBe(2);
  });

  //SettingForm for Default Goal Chart Type
  it("SettingForm for Default Goal Chart Type should contain proper props", () => {
    const desiredProps = {
      id: "DefaultGoalChartType",
      label: "Default Goal Chart Type:",
    };
    expect(chartsSettings.find("SettingForm").at(0).props()).toMatchObject(
      desiredProps
    );
  });

  //SelectControl for Default Goal Chart Type;
  it("SelectControl for Default Goal Chart Type should contain proper props", () => {
    expect(chartsSettings.find("SelectControl").at(0).props()).toStrictEqual(
      props.goalChart
    );
  });

  //SettingForm for Default Time Chart Type
  it("SettingForm for Default Time Chart Type should contain proper props", () => {
    const desiredProps = {
      id: "DefaultTimeChartType",
      label: "Default Time Chart Type:",
    };
    expect(chartsSettings.find("SettingForm").at(1).props()).toMatchObject(
      desiredProps
    );
  });

  //SelectControl for Default Time Chart Type
  it("SelectControl for Default Time Chart Type should contain proper props", () => {
    expect(chartsSettings.find("SelectControl").at(1).props()).toStrictEqual(
      props.timeChart
    );
  });

  //save button
  it("render 'Button' component", () => {
    expect(chartsSettings.find("Button").exists()).toBe(true);
  });
  it("'Button' component should contain 'Save Changes' text", () => {
    expect(chartsSettings.find("Button").text()).toBe("Save Changes");
  });
  it("should call 'saveChanges' callback", () => {
    chartsSettings.find("Button").simulate("click");
    expect(props.saveChanges).toHaveBeenCalled();
  });
});
