import React from "react";
import { shallow } from "enzyme";

import { SubjectEditableContainer } from "Containers/Category/SubjectsList/SubjectEditable/SubjectEditableContainer";

const props = {
  defaultEditMode: false,
  pickSubject: jest.fn(),
  render: jest.fn(),
};

describe("'SubjectEditableContainer' component", () => {
  describe("render fn", () => {
    let params;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<SubjectEditableContainer {...props} />);
      params = [...props.render.mock.calls].pop()[0];
    });

    //edit mode
    it("default should call 'render' callback with proper 'editMode'", () => {
      expect(params.editMode).toBe(props.defaultEditMode);
    });

    it("when 'defaultEditMode' is set to true, should call 'render' callback with 'editMode' to be true", () => {
      shallow(<SubjectEditableContainer {...props} defaultEditMode={true} />);
      params = [...props.render.mock.calls].pop()[0];

      expect(params.editMode).toBe(true);
    });

    it("should call 'render' callback with 'setEditMode' function", () => {
      expect(typeof params.setEditMode).toBe("function");
    });

    //pick subject
    it("should call 'render' callback with 'pickSubject' function", () => {
      expect(typeof params.pickSubject).toBe("function");
    });

    describe("when change edit mode", () => {
      beforeEach(() => {
        params.setEditMode(true);
        params = [...props.render.mock.calls].pop()[0];
      });

      it("should call 'render' callback with 'editMode' set to true", () => {
        expect(params.editMode).toBe(true);
      });
    });
  });
});
