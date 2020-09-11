import React from "react";
import { shallow } from "enzyme";

import { CategoryEditableContainer } from "Containers/CategoriesList/CategoryEditable/CategoryEditableContainer";

const props = { pickCategory: jest.fn(), render: jest.fn() };

describe("'CategoryEditableContainer' component", () => {
  shallow(<CategoryEditableContainer {...props} />);

  //render params
  it("default should call 'render' callback with 'editMode' set to false", () => {
    expect(props.render.mock.calls[0][0].editMode).toBe(false);
  });

  it("should call 'render' callback with 'setEditMode' function", () => {
    expect(typeof props.render.mock.calls[0][0].setEditMode).toBe("function");
  });

  it("should call 'render' callback with 'pickCategory' function", () => {
    expect(typeof props.render.mock.calls[0][0].pickCategory).toBe("function");
  });

  describe("when change edit mode", () => {
    beforeEach(() => {
      props.render.mock.calls[0][0].setEditMode(true);
    });

    it("should call 'render' callback with 'editMode' set to true", () => {
      expect([...props.render.mock.calls].pop()[0].editMode).toBe(true);
    });
  });
});
