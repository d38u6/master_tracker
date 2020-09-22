import React from "react";
import { shallow } from "enzyme";

import { SubjectFormContainer } from "Containers/Category/SubjectsList/SubjectForm/SubjectFormContainer";
import { subFour, subOne, subThree, subTwo } from "Data/fixtures";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

alert.showAlert = jest.fn();

const props = {
  subject: subOne,
  subjects: [subOne, subTwo, subThree, subFour],
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

  describe("by default", () => {
    let renderProps;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      renderProps = [...props.render.mock.calls].pop()[0];
    });

    //title
    it("should correctly init 'title' state", () => {
      expect(renderProps.titleConf.value).toBe(props.subject.title);
    });
    it("should call 'render' function with 'titleChangeHandler'", () => {
      expect(typeof renderProps.titleConf.onChange).toBe("function");
    });

    //moveUp
    it("should call 'render' function with 'moveUp' fn", () => {
      expect(typeof renderProps.moveUp).toBe("function");
    });
    //moveDown
    it("should call 'render' function with 'moveDown' fn", () => {
      expect(typeof renderProps.moveDown).toBe("function");
    });
    //save
    it("should call 'render' function with 'onApplyClick'", () => {
      expect(typeof renderProps.onApplyClick).toBe("function");
    });

    //remove
    it("should call 'render' function with 'onRemoveClick'", () => {
      expect(typeof renderProps.onRemoveClick).toBe("function");
    });
  });

  describe("when change title", () => {
    const newValue = "new title";
    let renderProps;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      [...props.render.mock.calls]
        .pop()[0]
        .titleConf.onChange({ target: { value: newValue } });
      renderProps = [...props.render.mock.calls].pop()[0];
    });

    it("should call 'render' function with new title", () => {
      expect(renderProps.titleConf.value).toBe(newValue);
    });

    describe("and when call 'onApplyClick' callback", () => {
      beforeEach(() => {
        renderProps.onApplyClick();
        renderProps = [...props.render.mock.calls].pop()[0];
      });

      it("should call 'editSubject' callback with correctly 'subjectId'", () => {
        expect(props.editSubject.mock.calls[0][0]).toBe(subOne.id);
      });

      it("should call 'editSubject' callback with new title 'subjectId'", () => {
        expect(props.editSubject.mock.calls[0][1]).toStrictEqual({
          title: newValue,
        });
      });

      it("should call 'setEditMode' callback with false", () => {
        expect(props.setEditMode).toHaveBeenLastCalledWith(false);
      });

      it("should call 'showAlert' fn with 'ChangesSaved' alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.ChangesSaved);
      });
    });
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
        expect(props.removeSubject).toHaveBeenCalledWith(props.subject.id);
      });

      it("should call 'removeRecordsForSubject' callback with correctly subjectId", () => {
        expect(props.removeRecordsForSubject).toHaveBeenCalledWith(
          props.subject.id
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
        expect(props.removeSubject).toHaveBeenCalledWith(props.subject.id);
      });

      it("should not call 'removeRecordsForSubject'", () => {
        expect(props.removeRecordsForSubject).not.toHaveBeenCalled();
      });

      it("should call 'showAlert' fn with 'SubjectRemoved' alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.SubjectRemoved);
      });
    });
  });

  //MoveUp
  describe("when call 'moveUp' callback and subject position is it first", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      [...props.render.mock.calls].pop()[0].moveUp();
    });

    it("should not call editSubject callback", () => {
      expect(props.editSubject).not.toHaveBeenCalled();
    });
  });

  describe("when call 'moveUp' callback and subject position is not first", () => {
    const diffProps = { ...props, subject: subTwo };
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...diffProps} />);
      [...diffProps.render.mock.calls].pop()[0].moveUp();
    });

    it("should call editSubject callback with new subject position", () => {
      expect(diffProps.editSubject).toHaveBeenCalledWith(diffProps.subject.id, {
        position: diffProps.subject.position - 1,
      });
    });

    it("should call editSubject callback with new upper subject position", () => {
      const upperSub = diffProps.subjects.find(
        ({ position }) => position === diffProps.subject.position - 1
      );
      expect(diffProps.editSubject).toHaveBeenLastCalledWith(upperSub.id, {
        position: upperSub.position + 1,
      });
    });
  });

  //MoveDown
  describe("when call 'moveDown' callback and subject position is it last", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} subject={subFour} />);
      [...props.render.mock.calls].pop()[0].moveDown();
    });

    it("should not call editSubject callback", () => {
      expect(props.editSubject).not.toHaveBeenCalled();
    });
  });

  describe("when call 'moveDown' callback and subject position is not last", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectFormContainer {...props} />);
      [...props.render.mock.calls].pop()[0].moveDown();
    });

    it("should call editSubject callback with new subject position", () => {
      expect(props.editSubject).toHaveBeenCalledWith(props.subject.id, {
        position: props.subject.position + 1,
      });
    });

    it("should call editSubject callback with new bottom subject position", () => {
      const bottomSub = props.subjects.find(
        ({ position }) => position === props.subject.position + 1
      );
      expect(props.editSubject).toHaveBeenLastCalledWith(bottomSub.id, {
        position: bottomSub.position - 1,
      });
    });
  });
});
