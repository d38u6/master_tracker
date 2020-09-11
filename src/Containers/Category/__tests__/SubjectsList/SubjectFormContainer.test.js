import React from "react";
import { shallow } from "enzyme";

import { SubjectFormContainer } from "Containers/Category/SubjectsList/SubjectForm/SubjectFormContainer";
import { subjects, subOne } from "Data/fixtures";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

alert.showAlert = jest.fn();

const props = {
  subjectId: subOne.id,
  subjects,
  editSubject: jest.fn(),
  removeSubject: jest.fn(),
  removeRecordsForSubject: jest.fn(),
  setEditMode: jest.fn(),
  render: jest.fn(),
};
let mockUseEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (mockUseEffect = f));

describe("'SubjectFormContainer' component", () => {
  shallow(<SubjectFormContainer {...props} />);

  //title
  it("should call 'render' function with 'titleChangeHandler'", () => {
    const { onChange } = props.render.mock.calls[0][0].titleConf;
    expect(typeof onChange).toBe("function");
  });

  it("should change title", () => {
    const { onChange } = props.render.mock.calls[0][0].titleConf;
    const newValue = "new title";
    onChange({ target: { value: newValue } });
    const { value } = [...props.render.mock.calls].pop()[0].titleConf;
    expect(value).toBe(newValue);
  });

  //save
  it("should call 'render' function with 'onApplyClick'", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    expect(typeof onApplyClick).toBe("function");
  });

  describe("when call 'onApplyClick' callback", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      props.render.mock.calls[0][0].onApplyClick();
    });

    it("should call 'setEditMode' callback with false", () => {
      expect(props.setEditMode).toHaveBeenLastCalledWith(false);
    });

    it("should call 'showAlert' fn with 'ChangesSaved' alert", () => {
      expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.ChangesSaved);
    });
  });

  //edit
  it("should call 'editSubject' callback with correctly 'subjectId'", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    onApplyClick();
    expect(props.editSubject.mock.calls[0][0]).toBe(subOne.id);
  });

  it("should call 'editSubject' callback with new data", () => {
    const newData = { title: "New edit title" };
    const lastRenderParam = [...props.render.mock.calls].pop()[0];
    lastRenderParam.titleConf.onChange({ target: { value: newData.title } });

    const { onApplyClick } = [...props.render.mock.calls].pop()[0];
    onApplyClick();
    expect([...props.editSubject.mock.calls].pop()[1]).toMatchObject(newData);
  });

  //remove
  it("should call 'render' function with 'onRemoveClick'", () => {
    const { onRemoveClick } = props.render.mock.calls[0][0];
    expect(typeof onRemoveClick).toBe("function");
  });

  describe("when call 'onRemoveClick' callback", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      const { onRemoveClick } = props.render.mock.calls[0][0];
      onRemoveClick();
    });

    it("should call 'showAlert' fn with 'SubjectRemoveConfirm' alert", () => {
      expect(alert.showAlert.mock.calls[0][0]).toBe(
        Alerts.SubjectRemoveConfirm
      );
    });

    it("should call 'showAlert' fn with 'onRemove' fn", () => {
      expect(typeof alert.showAlert.mock.calls[0][1].onRemove).toBe("function");
    });

    it("should call 'showAlert' fn with 'onRemoveWithoutRecords' fn", () => {
      expect(
        typeof alert.showAlert.mock.calls[0][1].onRemoveWithoutRecords
      ).toBe("function");
    });

    describe("and when call 'onRemove' fn", () => {
      beforeEach(() => {
        alert.showAlert.mock.calls[0][1].onRemove();
      });

      it("should call 'removeSubject' callback with correctly subjectId", () => {
        expect(props.removeSubject).toHaveBeenCalledWith(props.subjectId);
      });

      it("should call 'removeRecordsForSubject' callback with correctly subjectId", () => {
        expect(props.removeRecordsForSubject).toHaveBeenCalledWith(
          props.subjectId
        );
      });

      it("should call 'showAlert' fn with 'SubjectRemoved' alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.SubjectRemoved);
      });
    });

    describe("and when call 'onRemoveWithoutRecords' fn", () => {
      beforeEach(() => {
        alert.showAlert.mock.calls[0][1].onRemoveWithoutRecords();
      });

      it("should call 'removeSubject' callback with correctly subjectId", () => {
        expect(props.removeSubject).toHaveBeenCalledWith(props.subjectId);
      });

      it("should not call 'removeRecordsForSubject'", () => {
        expect(props.removeRecordsForSubject).not.toHaveBeenCalled();
      });

      it("should call 'showAlert' fn with 'SubjectRemoved' alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.SubjectRemoved);
      });
    });
  });

  describe("when subject exists", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      mockUseEffect();
    });

    it("should correctly init title", () => {
      const { value } = [...props.render.mock.calls].pop()[0].titleConf;
      expect(value).toBe(subOne.title);
    });
  });

  describe("when subject does not exists", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} subjectId="notExists" />);
      mockUseEffect();
    });

    it("should correctly init title", () => {
      const { value } = [...props.render.mock.calls].pop()[0].titleConf;
      expect(value).toBe("");
    });
  });
});
