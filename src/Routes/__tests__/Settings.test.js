import React from "react";
import { shallow } from "enzyme";

import Settings from "Routes/Settings";

import ChartsSettings from "Components/Settings/ChartsSettings/ChartsSettings";
import { goalChartTypesOption, timeChartTypesOption } from "Data/fixtures";

import GoalsSettings from "Components/Settings/GoalsSettings/GoalsSettings";
import { defaultGoals } from "Data/goals";
import { mapGoalsObjectToArray } from "Utility/goalsConversion";
import DataSettings from "Components/Settings/DataSettings/DataSettings";

describe("'Settings' component", () => {
  const settings = shallow(<Settings />);

  //Tabs
  it("render 'Tabs' component", () => {
    expect(settings.find("Tabs").exists()).toBe(true);
  });

  //Tab's
  it("render three 'Tab' component", () => {
    expect(settings.find("Tab").length).toBe(3);
  });

  //Tab charts settings
  it("'Tab' component for charts settings should contain porper porps", () => {
    const desiredProps = { eventKey: "chartsSettings", title: "Charts" };
    expect(settings.find("Tab").at(0).props()).toMatchObject(desiredProps);
  });

  //Tab goals settings
  it("'Tab' component for goals settings should contain porper porps", () => {
    const desiredProps = { eventKey: "goalsSettings", title: "Goals" };
    expect(settings.find("Tab").at(1).props()).toMatchObject(desiredProps);
  });

  //Tab data settings
  it("'Tab' component for data settings should contain porper porps", () => {
    const desiredProps = { eventKey: "dataSettings", title: "Data" };
    expect(settings.find("Tab").at(2).props()).toMatchObject(desiredProps);
  });

  //ChartsSettingsContainer
  it("render 'ChartsSettingsContainer'", () => {
    expect(settings.find("Connect(ChartsSettingsContainer)").exists()).toBe(
      true
    );
  });
  describe("render prop inside 'ChartsSettingsContainer'", () => {
    let wrapper;
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
    };
    beforeEach(() => {
      wrapper = settings
        .find("Connect(ChartsSettingsContainer)")
        .prop("render")(props);
    });

    it("render 'ChartsSettings' component", () => {
      expect(wrapper.type).toBe(ChartsSettings);
    });
    it("'ChartsSettings' component should contain proper props", () => {
      expect(wrapper.props).toMatchObject(props);
    });
  });

  //GoalsSettingsContainer
  it("render 'GoalsSettingsContainer'", () => {
    expect(settings.find("Connect(GoalsSettingsContainer)").exists()).toBe(
      true
    );
  });
  describe("render prop inside 'GoalsSettingsContainer'", () => {
    const props = {
      goals: mapGoalsObjectToArray(defaultGoals).map(
        ({ id, hours, minutes }) => {
          return {
            id,
            hoursConf: { value: hours, onChange: jest.fn() },
            minConf: { value: minutes, onChange: jest.fn() },
          };
        }
      ),
      saveChanges: jest.fn(),
    };
    let wrapper;
    beforeEach(() => {
      wrapper = settings.find("Connect(GoalsSettingsContainer)").prop("render")(
        props
      );
    });
    it("render 'GoalsSettings' component", () => {
      expect(wrapper.type).toBe(GoalsSettings);
    });
    it("'GoalsSettings' component should contain proper props", () => {
      expect(wrapper.props).toMatchObject(props);
    });
  });

  //DataSettingsContainer
  it("render 'DataSettingsContainer'", () => {
    expect(settings.find("Connect(DataSettingsContainer)").exists()).toBe(true);
  });
  describe("render prop inside 'DataSettingsContainer'", () => {
    const props = {
      exportData: jest.fn(),
      importData: jest.fn(),
      eraseData: jest.fn(),
    };
    let wrapper;
    beforeEach(() => {
      wrapper = settings.find("Connect(DataSettingsContainer)").prop("render")(
        props
      );
    });
    it("render 'DataSettings' component", () => {
      expect(wrapper.type).toBe(DataSettings);
    });
    it("'DataSettings' component should contain proper props", () => {
      expect(wrapper.props).toMatchObject(props);
    });
  });
});
