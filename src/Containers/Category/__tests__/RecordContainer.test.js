import React from "react";
import { shallow } from "enzyme";

import { RecordContainer } from "Containers/Category/Record/RecordContainer";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

alert.showAlert = jest.fn();

const props = {
  id: "testRecordId",
  removeRecord: jest.fn(),
  render: jest.fn(),
};

describe("'RecordContainer' component", () => {
  it("should call render fn, with 'removeRecord' fn", () => {
    shallow(<RecordContainer {...props} />);
    expect(typeof props.render.mock.calls[0][0].removeRecord).toBe("function");
  });

  describe("when call 'removeRecord' callback", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<RecordContainer {...props} />);
      props.render.mock.calls[0][0].removeRecord();
    });

    it("should call 'showAlert' fn with 'RecordRemoveConfirm' alert", () => {
      expect(alert.showAlert.mock.calls[0][0]).toBe(Alerts.RecordRemoveConfirm);
    });

    it("should call 'showAlert' fn with 'onRemove' fn", () => {
      expect(typeof alert.showAlert.mock.calls[0][1].onRemove).toBe("function");
    });

    describe("and when call 'onRemove fn'", () => {
      beforeEach(() => {
        alert.showAlert.mock.calls[0][1].onRemove();
      });

      it("should call 'remveRecord' callback with recordId", () => {
        expect(props.removeRecord).toHaveBeenCalledWith(props.id);
      });

      it("should call 'showAlert' callback with 'RecordRemoved' Alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.RecordRemoved);
      });
    });
  });
});
