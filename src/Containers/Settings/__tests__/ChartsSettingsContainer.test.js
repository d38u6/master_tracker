import React from "react";
import { shallow } from "enzyme";

import { ChartsSettingsContainer } from "Containers/Settings/ChartsSettingsContainer";
import { goalChartTypesOption, timeChartTypesOption } from "Data/fixtures";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

alert.showAlert = jest.fn();

const props = {
  render: jest.fn(),
  defaultGoalChartType: goalChartTypesOption[0].id,
  setDefaultGoalChartType: jest.fn(),
  defaultTimeChartType: timeChartTypesOption[0].id,
  setDefaultTimeChartType: jest.fn(),
};
const mockUseEffects = [];
jest.spyOn(React, "useEffect").mockImplementation((f) => {
  mockUseEffects.push(f);
});

describe("'ChartsSettingsContainer' component", () => {
  describe("default", () => {
    let renderProps;
    beforeEach(() => {
      jest.clearAllMocks();
      mockUseEffects.length = 0;
      shallow(<ChartsSettingsContainer {...props} />);
      mockUseEffects.forEach((f) => f());
      renderProps = props.render.mock.calls[0][0];
    });

    //goalChartConf
    it("should call render fn with correctly goal chart 'options'", () => {
      expect(renderProps.goalChart.options).toStrictEqual(goalChartTypesOption);
    });
    it("should call render fn with correct goal chart 'value'", () => {
      expect(renderProps.goalChart.value).toBe(props.defaultGoalChartType);
    });
    it("should call render fn with correct goal chart 'onChange' function", () => {
      expect(typeof renderProps.goalChart.onChange).toBe("function");
    });

    //timeChartConf
    it("should call render fn with correctly time chart 'options'", () => {
      expect(renderProps.timeChart.options).toStrictEqual(timeChartTypesOption);
    });
    it("should call render fn with correct time chart 'value'", () => {
      expect(renderProps.timeChart.value).toBe(props.defaultTimeChartType);
    });
    it("should call render fn with correct time chart 'onChange' function", () => {
      expect(typeof renderProps.timeChart.onChange).toBe("function");
    });

    //saveChanges
    it("should call render fn with 'saveChanges' function", () => {
      expect(typeof renderProps.saveChanges).toBe("function");
    });

    describe("when change default goal chart type", () => {
      const defaultGoalChartType = goalChartTypesOption[2].id;
      let renderProps;
      beforeEach(() => {
        jest.clearAllMocks();
        shallow(<ChartsSettingsContainer {...props} />);
        props.render.mock.calls[0][0].goalChart.onChange({
          target: { value: defaultGoalChartType },
        });
        renderProps = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with new goal chart 'value'", () => {
        expect(renderProps.goalChart.value).toBe(defaultGoalChartType);
      });

      describe("and when change default time chart type", () => {
        const defaultTimeChartType = timeChartTypesOption[2].id;
        let renderProps;
        beforeEach(() => {
          [...props.render.mock.calls].pop()[0].timeChart.onChange({
            target: { value: defaultTimeChartType },
          });
          renderProps = [...props.render.mock.calls].pop()[0];
        });

        it("should call render fn with new time chart 'value'", () => {
          expect(renderProps.timeChart.value).toBe(defaultTimeChartType);
        });

        describe("and when save changes", () => {
          beforeEach(() => {
            renderProps.saveChanges();
          });

          it("should call 'setDefaultGoalChartType' with correct value", () => {
            expect(props.setDefaultGoalChartType).toHaveBeenCalledWith(
              defaultGoalChartType
            );
          });
          it("should call 'setDefaultTimeChartType' with correct value", () => {
            expect(props.setDefaultTimeChartType).toHaveBeenCalledWith(
              defaultTimeChartType
            );
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
