import React from "react";
import { shallow } from "enzyme";

import { GoalsSettingsContainer } from "Containers/Settings/GoalsSettingsContainer";
import { defaultGoals } from "Data/goals";
import * as alert from "Components/Utility/Alert/showAlert";
alert.showAlert = jest.fn();
import Alerts from "Components/Alerts";
import { getHours } from "Utility/time";

const props = { goals: defaultGoals, setGoals: jest.fn(), render: jest.fn() };

let mockUseEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (mockUseEffect = f));

describe("'GoalsSettingsContainer' component", () => {
  describe("default", () => {
    let renderProps;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<GoalsSettingsContainer {...props} />);
      mockUseEffect();
      renderProps = props.render.mock.calls[0][0];
    });

    //goals
    it("should call render fn, with correctly number of goals", () => {
      expect(renderProps.goals.length).toBe(Object.keys(defaultGoals).length);
    });

    Object.entries(defaultGoals).forEach(([key, value], i) => {
      it(`Goal ${key} should contain correct id`, () => {
        expect(renderProps.goals[i].id).toBe(key);
      });

      it(`Goal ${key} should contain correct hours value`, () => {
        expect(renderProps.goals[i].hoursConf.value).toBe(getHours(value));
      });

      it(`Goal ${key} should contain hoursOnChange fn`, () => {
        expect(typeof renderProps.goals[i].hoursConf.onChange).toBe("function");
      });

      it(`Goal ${key} should contain minutesOnChange fn`, () => {
        expect(typeof renderProps.goals[i].minConf.onChange).toBe("function");
      });
    });

    //handlerMinutesChange
    it("when minutes is less then 0, should set minutes to 0", () => {
      renderProps.goals[0].minConf.onChange({ target: { value: -1 } });
      expect([...props.render.mock.calls].pop()[0].goals[0].minConf.value).toBe(
        0
      );
    });

    it("when minutes is NaN should set minutes to 0", () => {
      renderProps.goals[0].minConf.onChange({ target: { value: "al" } });
      expect([...props.render.mock.calls].pop()[0].goals[0].minConf.value).toBe(
        0
      );
    });

    it("when minutes is greater than 59 should set minutes to 59", () => {
      renderProps.goals[0].minConf.onChange({ target: { value: 61 } });
      expect([...props.render.mock.calls].pop()[0].goals[0].minConf.value).toBe(
        59
      );
    });

    //handlerHoursChange
    it("when hours is less then 0, should set hours to 0", () => {
      renderProps.goals[0].hoursConf.onChange({ target: { value: -1 } });
      expect(
        [...props.render.mock.calls].pop()[0].goals[0].hoursConf.value
      ).toBe(0);
    });

    it("when hours is NaN should set hours to 0", () => {
      renderProps.goals[0].hoursConf.onChange({ target: { value: "al" } });
      expect(
        [...props.render.mock.calls].pop()[0].goals[0].hoursConf.value
      ).toBe(0);
    });
    //saveChanges
    it("should call render fn with 'saveChanges' function", () => {
      expect(typeof renderProps.saveChanges).toBe("function");
    });
  });

  Object.entries(defaultGoals).forEach(([key], i) => {
    describe(`When change hours in ${key} goal`, () => {
      const hours = Math.floor(Math.random() * 44);
      let renderProps;
      beforeEach(() => {
        jest.clearAllMocks();
        shallow(<GoalsSettingsContainer {...props} />);
        props.render.mock.calls[0][0].goals[i].hoursConf.onChange({
          target: { value: hours },
        });
        renderProps = [...props.render.mock.calls].pop()[0];
      });
      it("should call render fn with new hours value", () => {
        expect(renderProps.goals[i].hoursConf.value).toBe(hours);
      });

      describe(`and when change minutes in ${key} goal`, () => {
        const minutes = Math.floor(Math.random() * 59);
        let renderProps;
        beforeEach(() => {
          [...props.render.mock.calls].pop()[0].goals[i].minConf.onChange({
            target: { value: minutes },
          });
          renderProps = [...props.render.mock.calls].pop()[0];
        });
        it("should call render fn with new minutes value", () => {
          expect(renderProps.goals[i].minConf.value).toBe(minutes);
        });

        describe("and when save changes", () => {
          beforeEach(() => {
            renderProps.saveChanges();
          });
          it("should call 'setGoals' with correct goals object", () => {
            expect(props.setGoals).toHaveBeenCalledWith({
              ...defaultGoals,
              [key]: hours * 60 + minutes,
            });
          });

          it("should call 'showAlert' callback with 'ChangesSaved' alert", () => {
            expect(alert.showAlert).toHaveBeenLastCalledWith(
              Alerts.ChangesSaved
            );
          });
        });
      });
    });
  });
});
