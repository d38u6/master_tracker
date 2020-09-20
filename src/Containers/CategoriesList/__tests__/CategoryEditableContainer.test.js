import React from "react";
import { shallow } from "enzyme";

import { CategoryEditableContainer } from "Containers/CategoriesList/CategoryEditable/CategoryEditableContainer";

const props = {
  defaultEditMode: false,
  pickCategory: jest.fn(),
  render: jest.fn(),
};

describe("'CategoryEditableContainer' component", () => {
  describe("render fn", () => {
    let params;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryEditableContainer {...props} />);
      params = [...props.render.mock.calls].pop()[0];
    });

    //render params
    it("default should call 'render' callback with proper 'editMode'", () => {
      expect(params.editMode).toBe(props.defaultEditMode);
    });

    it("when 'defaultEditMode' is set to true, should call 'render' callback with 'editMode' to be true", () => {
      shallow(<CategoryEditableContainer {...props} defaultEditMode={true} />);
      params = [...props.render.mock.calls].pop()[0];

      expect(params.editMode).toBe(true);
    });

    it("should call 'render' callback with 'setEditMode' function", () => {
      expect(typeof params.setEditMode).toBe("function");
    });

    it("should call 'render' callback with 'pickCategory' function", () => {
      expect(typeof params.pickCategory).toBe("function");
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
