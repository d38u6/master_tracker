import React from "react";
import { shallow } from "enzyme";

import { CategoryFormContainer } from "../CategoryForm/CategoryFormContainer";
import { categories, categoryFour } from "../../../data/fixtures";

const props = {
  categories,
  categoryId: categoryFour.id,
  editCategory: jest.fn(),
  removeCategory: jest.fn(),
  setEditMode: jest.fn(),
  onPick: jest.fn(),
  render: jest.fn(),
};
let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

describe("'CategoryFormContainer' component", () => {
  shallow(<CategoryFormContainer {...props} />);

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

  //description
  it("should call 'render' function with 'descChangeHandler'", () => {
    const { onChange } = props.render.mock.calls[0][0].descConf;
    expect(typeof onChange).toBe("function");
  });

  it("should change description", () => {
    const { onChange } = props.render.mock.calls[0][0].descConf;
    const newValue = "new description";
    onChange({ target: { value: newValue } });
    const { value } = [...props.render.mock.calls].pop()[0].descConf;
    expect(value).toBe(newValue);
  });

  //image
  it("should call 'render' function with 'onImageChangeHandler'", () => {
    const { onChange } = props.render.mock.calls[0][0].imageConf;
    expect(typeof onChange).toBe("function");
  });

  it("should change imageSrc", () => {
    const { onChange } = props.render.mock.calls[0][0].imageConf;
    const newSrc = "new/image/src.jpg";
    onChange(newSrc);
    const { src } = [...props.render.mock.calls].pop()[0].imageConf;
    expect(src).toBe(newSrc);
  });

  //save
  it("should call 'render' function with 'onApplyClick'", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    expect(typeof onApplyClick).toBe("function");
  });

  it("should call 'setEditMode' callback with false", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    onApplyClick();
    expect(props.setEditMode).toHaveBeenCalledWith(false);
  });

  it("should call 'editCategory' callback with correctly categoryId", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    onApplyClick();
    expect(props.editCategory.mock.calls[0][0]).toBe(categoryFour.id);
  });

  describe("when change data", () => {
    const newData = {
      imageSrc: "new/image/src.jpg",
      title: "another title",
      desc: "this is new desc",
    };
    beforeEach(() => {
      const lastRenderParam = [...props.render.mock.calls].pop()[0];
      lastRenderParam.titleConf.onChange({
        target: { value: newData.title },
      });
      lastRenderParam.descConf.onChange({
        target: { value: newData.desc },
      });
      lastRenderParam.imageConf.onChange(newData.imageSrc);
    });

    it("should call 'editCategory' callback with correctly data", () => {
      const { onApplyClick } = [...props.render.mock.calls].pop()[0];
      onApplyClick();
      expect([...props.editCategory.mock.calls].pop()[1]).toMatchObject(
        newData
      );
    });
  });

  //remove
  it("should call 'render' function with 'onRemoveClick'", () => {
    const { onRemoveClick } = props.render.mock.calls[0][0];
    expect(typeof onRemoveClick).toBe("function");
  });

  it("should call 'removeCategory' callback with correctly categoryId", () => {
    const { onRemoveClick } = props.render.mock.calls[0][0];
    onRemoveClick();

    expect(props.removeCategory.mock.calls[0][0]).toBe(categoryFour.id);
  });

  describe("when 'categoryId' exists inside 'categories'", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryFormContainer {...props} />);
      useEffect();
    });

    it("should correctly init title", () => {
      const { value } = [...props.render.mock.calls].pop()[0].titleConf;
      expect(value).toBe(categoryFour.title);
    });

    it("should correctly init description", () => {
      const { value } = [...props.render.mock.calls].pop()[0].descConf;
      expect(value).toBe(categoryFour.desc);
    });

    it("should correctly init image source", () => {
      const { src } = [...props.render.mock.calls].pop()[0].imageConf;
      expect(src).toBe(categoryFour.imageSrc);
    });
  });

  describe("when 'categoryId' do not exists inside 'categories'", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryFormContainer {...props} categoryId="not exists" />);
      useEffect();
    });

    it("should correctly init title", () => {
      const { value } = [...props.render.mock.calls].pop()[0].titleConf;
      expect(value).toBe("");
    });

    it("should correctly init description", () => {
      const { value } = [...props.render.mock.calls].pop()[0].descConf;
      expect(value).toBe("");
    });

    it("should correctly init image source", () => {
      const { src } = [...props.render.mock.calls].pop()[0].imageConf;
      expect(src).toBe("");
    });
  });
});
