import React from "react";
import { shallow } from "enzyme";
jest.mock("../../../components/Utility/Alert/showAlert");
import { showAlert } from "../../../components/Utility/Alert/showAlert";
import Alerts from "../../../components/Alerts";

const mockGo = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    go: mockGo,
  }),
}));
import { useHistory } from "react-router-dom";

import { RestoreDefaultSettingsContainer } from "../RestoreDefaultSettingsContainer";
import defaultSettings from "../../../data/defaultSettings";

const mockHistory = useHistory();
const props = { setSettings: jest.fn(), render: jest.fn() };

describe("'RestoreDefaultSettingsContainer' component", () => {
  describe("call render funciton", () => {
    let properties;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<RestoreDefaultSettingsContainer {...props} />);
      properties = props.render.mock.calls[0][0];
    });
    it("with 'restore' funciton", () => {
      expect(typeof properties.restore).toBe("function");
    });

    describe("when call 'restore' fn", () => {
      let lastCallShowAlert;
      beforeEach(() => {
        properties.restore();
        lastCallShowAlert = [...showAlert.mock.calls].pop();
      });
      it("should call 'showAlert' fn with 'RestoreDefaultSettingsConfirm' alert", () => {
        expect(lastCallShowAlert[0]).toBe(Alerts.RestoreDefaultSettingsConfirm);
      });

      describe("and when call 'onRestore' callback", () => {
        beforeEach(() => {
          lastCallShowAlert[1].onRestore();
        });
        it("should call 'setSettings' callback with default settings", () => {
          expect(props.setSettings).toHaveBeenCalledWith(defaultSettings);
        });
        it("should call 'mockGo' callback with 0", () => {
          expect(mockGo).toHaveBeenLastCalledWith(0);
        });
        it("should call 'showAlert' fn with 'DefaultSettingsRestored' alert", () => {
          expect(showAlert).toHaveBeenLastCalledWith(
            Alerts.DefaultSettingsRestored
          );
        });
      });
    });
  });

  //   it("d38u6", () => {
  //     console.log(wrapper.debug());
  //   });
});
