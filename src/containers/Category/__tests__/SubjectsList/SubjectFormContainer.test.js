import React from "react";
import { shallow } from "enzyme";

import { SubjectFormContainer } from "../../SubjectsList/SubjectForm/SubjectFormContainer";
import { subjects, subOne } from "../../../../data/fixtures";

const props = {
  subjectId: subOne.id,
  subjects,
  editSubject: jest.fn(),
  removeSubject: jest.fn(),
  onSave: jest.fn(),
  render: jest.fn(),
};
let mockUseEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (mockUseEffect = f));

describe("'SubjectFormContainer' component", () => {
  const wrapper = shallow(<SubjectFormContainer {...props} />);

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

  it("should call 'onSave' callback", () => {
    const { onApplyClick } = props.render.mock.calls[0][0];
    onApplyClick();
    expect(props.onSave).toHaveBeenCalled();
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

  it("should call 'removeSubject' callback with correctly 'subjectId'", () => {
    const { onRemoveClick } = props.render.mock.calls[0][0];
    onRemoveClick();

    expect(props.removeSubject.mock.calls[0][0]).toBe(subOne.id);
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

  it("d38u6", () => {
    console.log(wrapper.debug());
  });
});
