import React from "react";
import { shallow } from "enzyme";

import SubjectsList from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectsList";
import { subOne, subTwo, subjectFormConf } from "Data/fixtures";

const props = { subjects: [subTwo, subOne], onAddClick: jest.fn() };

describe("'SubjectsList' component", () => {
  const subjectsList = shallow(<SubjectsList {...props} />);

  //TableStriped
  it("render 'TableStriped' component", () => {
    expect(subjectsList.find("TableStriped").exists()).toBe(true);
  });

  //SubjectRowEditable
  it("render correct number of 'SubjectRowEditable' components", () => {
    expect(subjectsList.find("Connect(SubjectEditableContainer)").length).toBe(
      props.subjects.length
    );
  });

  subjectsList
    .find("Connect(SubjectEditableContainer)")
    .forEach((subjectEditableContainer, i) => {
      it(`should correctly pass 'subject' to 'SubjectFormContainer' for subject ${i}`, () => {
        const subjectFormContainer = subjectEditableContainer.prop("render")({
          editMode: true,
        });

        expect(subjectFormContainer.props.subject).toBe(props.subjects[i]);
      });

      it(`should correctly pass 'subjects' to 'SubjectFormContainer' for subject ${i}`, () => {
        const subjectFormContainer = subjectEditableContainer.prop("render")({
          editMode: true,
        });

        expect(subjectFormContainer.props.subjects).toBe(props.subjects);
      });

      it(`should correctly pass 'subject' props to 'SubjectRow' for subject ${i}`, () => {
        const subjectRow = subjectEditableContainer.prop("render")({
          editMode: false,
        });

        expect(subjectRow.props).toMatchObject(props.subjects[i]);
      });
    });

  //render prop in SubjectFormContainer
  it("render prop function in 'SubjectFormContainer', should render 'tr' element", () => {
    const wrapper = shallow(
      subjectsList
        .find("Connect(SubjectEditableContainer)")
        .at(0)
        .prop("render")({
          editMode: true,
        })
        .props.render(subjectFormConf)
    );
    expect(wrapper.find("tr").exists()).toBe(true);
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
