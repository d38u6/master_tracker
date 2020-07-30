import React from "react";
import { shallow } from "enzyme";

import { SubjectEditableContainer } from "../SubjectEditable/SubjectEditableContainer";

const props = { pickSubject: jest.fn(), render: jest.fn() };

describe("'SubjectEditableContainer' component", () => {
  const subjectEditableContainer = shallow(
    <SubjectEditableContainer {...props} />
  );

  //render params
  //edit mode
  it("default should call 'render' callback with 'editMode' set to false", () => {
    expect(props.render.mock.calls[0][0].editMode).toBe(false);
  });

  it("should call 'render' callback with 'setEditMode' function", () => {
    expect(typeof props.render.mock.calls[0][0].setEditMode).toBe("function");
  });

  //show time form
  it("default should call 'render' callback with 'showTimeForm' set to false", () => {
    expect(props.render.mock.calls[0][0].showTimeForm).toBe(false);
  });

  it("should call 'render' callback with 'setShowTimeForm' function", () => {
    expect(typeof props.render.mock.calls[0][0].setShowTimeForm).toBe(
      "function"
    );
  });

  //pick subject
  it("should call 'render' callback with 'pickSubject' function", () => {
    expect(typeof props.render.mock.calls[0][0].pickSubject).toBe("function");
  });

  describe("when change edit mode", () => {
    beforeEach(() => {
      props.render.mock.calls[0][0].setEditMode(true);
    });

    it("should call 'render' callback with 'editMode' set to true", () => {
      expect([...props.render.mock.calls].pop()[0].editMode).toBe(true);
    });
  });

  describe("when change show time form", () => {
    beforeEach(() => {
      props.render.mock.calls[0][0].setShowTimeForm(true);
    });

    it("should call 'render' callback with 'showTimeForm' set to true", () => {
      expect([...props.render.mock.calls].pop()[0].showTimeForm).toBe(true);
    });
  });
});
