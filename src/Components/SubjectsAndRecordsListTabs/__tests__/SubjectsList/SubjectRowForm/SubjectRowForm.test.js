import React from "react";
import { shallow } from "enzyme";

import SubjectRowForm from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRowForm/SubjectRowForm";
import { subjectFormConf } from "Data/fixtures";

const props = { ...subjectFormConf };

describe("'SubjectRowForm' component", () => {
  const subjectRowForm = shallow(<SubjectRowForm {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(subjectRowForm.find("tr").exists()).toBe(true);
  });

  //TitleControl
  it("render 'TitleControl' component", () => {
    expect(subjectRowForm.find("TitleControl").exists()).toBe(true);
  });

  it("'TitleControl' component should contain proper props", () => {
    expect(subjectRowForm.find("TitleControl").props()).toMatchObject({
      ...props.titleConf,
    });
  });

  it("title 'onChange' callback should be call with new value", () => {
    const newValue = "new value";
    subjectRowForm.find("TitleControl").simulate("change", newValue);
    expect(props.titleConf.onChange).toHaveBeenCalledWith(newValue);
  });

  //PositionControls
  it("render 'PositionControls'", () => {
    expect(subjectRowForm.find("PositionControls").exists()).toBe(true);
  });

  it("'PositionControls' component should contain proper props", () => {
    expect(subjectRowForm.find("PositionControls").props()).toMatchObject({
      moveUp: props.moveUp,
      moveDown: props.moveDown,
    });
  });

  //RemoveButtonCol
  it("render 'RemoveButtonCol' component", () => {
    expect(subjectRowForm.find("RemoveButtonCol").exists()).toBe(true);
  });

  it("should call 'onRemoveClick' callback", () => {
    subjectRowForm.find("RemoveButtonCol").simulate("click");
    expect(props.onRemoveClick).toHaveBeenCalled();
  });

  //ApplyButton
  it("render 'ApplyButton' component", () => {
    expect(subjectRowForm.find("ApplyButton").exists()).toBe(true);
  });

  it("should call 'onApplyClick' callback", () => {
    subjectRowForm.find("ApplyButton").simulate("click");
    expect(props.onApplyClick).toHaveBeenCalled();
  });
});
