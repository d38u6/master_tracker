import React from "react";
import { shallow } from "enzyme";

import GoalsSettings, {
  getLabel,
} from "Components/Settings/GoalsSettings/GoalsSettings";
import { mapGoalsObjectToArray } from "Utility/goalsConversion";
import { defaultGoals } from "Data/goals";

function createTimeControlConf({ id, hours, minutes }) {
  return {
    id,
    hoursConf: {
      value: hours,
      onChange: jest.fn(),
    },
    minConf: {
      value: minutes,
      onChange: jest.fn(),
    },
  };
}

const props = {
  goals: mapGoalsObjectToArray(defaultGoals).map(createTimeControlConf),
  saveChanges: jest.fn(),
};

describe("'GoalsSettings' component", () => {
  const goalsSettings = shallow(<GoalsSettings {...props} />);

  //SettingsWrapper
  it("render 'SettingsWrapper' component", () => {
    expect(goalsSettings.find("SettingsWrapper").exists()).toBe(true);
  });

  //SettingsHeader
  it("render 'SettingsHeader' component", () => {
    expect(goalsSettings.find("SettingsHeader").exists()).toBe(true);
  });
  it("'SettingsHeader' component should contain 'Goals Settings' title prop", () => {
    expect(goalsSettings.find("SettingsHeader").prop("title")).toBe(
      "Goals Settings"
    );
  });

  //SettingForms
  it("render correctly number of 'SettingForm' components", () => {
    expect(goalsSettings.find("SettingForm").length).toBe(props.goals.length);
  });

  goalsSettings.find("SettingForm").forEach((settingForm, i) => {
    it(`'SettingForm' component ${
      i + 1
    } should contain correct 'id' and 'label' props`, () => {
      const desiredProps = {
        id: props.goals[i].id.toUpperCase(),
        label: getLabel(props.goals[i].id),
      };
      expect(settingForm.props()).toMatchObject(desiredProps);
    });
  });

  //HoursAndMinutesControls
  it("render correctly number of 'HoursAndMinutesControl' components", () => {
    expect(goalsSettings.find("HoursAndMinutesControl").length).toBe(
      props.goals.length
    );
  });

  goalsSettings
    .find("HoursAndMinutesControl")
    .forEach((hoursAndMinutesControl, i) => {
      it(`'HoursAndMinutesControl' component ${
        i + 1
      } should contain correct 'hoursConf'`, () => {
        expect(hoursAndMinutesControl.prop("hoursConf")).toStrictEqual(
          props.goals[i].hoursConf
        );
      });
      it(`'HoursAndMinutesControl' component ${
        i + 1
      } should contain correct 'minConf'`, () => {
        expect(hoursAndMinutesControl.prop("minConf")).toStrictEqual(
          props.goals[i].minConf
        );
      });
    });

  //save button
  it("render 'Button' component", () => {
    expect(goalsSettings.find("Button").exists()).toBe(true);
  });
  it("'Button' component should contain 'Save Changes' text", () => {
    expect(goalsSettings.find("Button").text()).toBe("Save Changes");
  });
  it("should call 'saveChanges' callback", () => {
    goalsSettings.find("Button").simulate("click");
    expect(props.saveChanges).toHaveBeenCalled();
  });
});
