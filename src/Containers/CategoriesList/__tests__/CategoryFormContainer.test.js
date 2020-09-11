import React from "react";
import { shallow } from "enzyme";

import { CategoryFormContainer } from "Containers/CategoriesList/CategoryForm/CategoryFormContainer";
import { categories, categoryFour } from "Data/fixtures";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

const props = {
  categories,
  categoryId: categoryFour.id,
  editCategory: jest.fn(),
  removeCategory: jest.fn(),
  removeSubjectsForCategory: jest.fn(),
  removeRecordsForCategory: jest.fn(),
  setEditMode: jest.fn(),
  render: jest.fn(),
};
let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

alert.showAlert = jest.fn();

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
      jest.clearAllMocks();
      shallow(<CategoryFormContainer {...props} />);

      const lastRenderParam = [...props.render.mock.calls].pop()[0];
      lastRenderParam.titleConf.onChange({
        target: { value: newData.title },
      });
      lastRenderParam.descConf.onChange({
        target: { value: newData.desc },
      });
      lastRenderParam.imageConf.onChange(newData.imageSrc);
      [...props.render.mock.calls].pop()[0].onApplyClick();
    });

    it("should call 'editCategory' callback with correctly data", () => {
      expect([...props.editCategory.mock.calls].pop()[1]).toMatchObject(
        newData
      );
    });

    it("should call 'showAlert' fn with 'ChangesSaved' alert", () => {
      expect(alert.showAlert).toHaveBeenCalledWith(Alerts.ChangesSaved);
    });
  });

  //remove
  it("should call 'render' function with 'onRemoveClick'", () => {
    const { onRemoveClick } = props.render.mock.calls[0][0];
    expect(typeof onRemoveClick).toBe("function");
  });

  describe("when call 'onRemoveClick' callback", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryFormContainer {...props} />);
      const { onRemoveClick } = props.render.mock.calls[0][0];
      onRemoveClick();
    });

    it("should call 'showAlert' fn with 'CategoryRemoveConfirm' alert", () => {
      expect(alert.showAlert.mock.calls[0][0]).toBe(
        Alerts.CategoryRemoveConfirm
      );
    });

    it("should call 'showAlert' fn with 'onRemove' fn", () => {
      expect(typeof alert.showAlert.mock.calls[0][1].onRemove).toBe("function");
    });

    describe("and when call 'onRemove fn'", () => {
      beforeEach(() => {
        alert.showAlert.mock.calls[0][1].onRemove();
      });

      it("should call 'removeCategory' callback with correctly categoryId", () => {
        expect(props.removeCategory).toHaveBeenCalledWith(categoryFour.id);
      });

      it("should call 'removeSubjectsForCategory' callback with correctly categoryId", () => {
        expect(props.removeSubjectsForCategory).toHaveBeenCalledWith(
          categoryFour.id
        );
      });

      it("should call 'removeRecordsForCategory' callback with correctly categoryId", () => {
        expect(props.removeRecordsForCategory).toHaveBeenCalledWith(
          categoryFour.id
        );
      });

      it("should call 'showAlert' fn with 'CategoryRemoved' alert", () => {
        expect(alert.showAlert).toHaveBeenLastCalledWith(
          Alerts.CategoryRemoved
        );
      });
    });
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
