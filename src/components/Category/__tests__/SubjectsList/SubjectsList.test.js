import React from "react";
import { shallow } from "enzyme";

import SubjectsList from "../../SubjectsList/SubjectsList";
import { subOne, subTwo } from "../../../../data/fixtures";

const props = { subjects: [subTwo, subOne], onAddClick: jest.fn() };

describe("'SubjectsList' component", () => {
  const subjectsList = shallow(<SubjectsList {...props} />);

  //TabelWithTheme
  it("render 'TabeleWithTheme' component", () => {
    expect(subjectsList.find("WithTheme(TableWithTheme)").exists()).toBe(true);
  });

  it("'TabelWithTheme' should contain propre props", () => {
    const desiredProps = {
      className: "SubjectsList",
      striped: true,
      hover: true,
      size: "sm",
    };
    expect(
      subjectsList.find("WithTheme(TableWithTheme)").props()
    ).toMatchObject(desiredProps);
  });

  //tbody
  it("render 'tbody' element", () => {
    expect(
      subjectsList.find("WithTheme(TableWithTheme) > tbody").exists()
    ).toBe(true);
  });

  //SubjectRowEditable
  it("render correct number of 'SubjectRowEditable' components", () => {
    expect(subjectsList.find("Memo(SubjectRowEditable)").length).toBe(
      props.subjects.length
    );
  });

  subjectsList
    .find("Memo(SubjectRowEditable)")
    .forEach((subjectRowEditable, i) => {
      it(`'SubjectRowEditable' ${i} should contain proper props`, () => {
        expect(subjectRowEditable.props()).toMatchObject(props.subjects[i]);
      });
    });

  //AddButton
  it("render 'AddButton' component", () => {
    expect(subjectsList.find("AddButton").exists()).toBe(true);
  });

  it("should call 'onAddClick' callback", () => {
    subjectsList.find("AddButton").simulate("click");
    expect(props.onAddClick).toHaveBeenCalled();
  });
});
