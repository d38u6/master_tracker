import React from "react";
import { shallow } from "enzyme";

import SubjectsList from "../../SubjectsList/SubjectsList";
import { subOne, subTwo, subjectFormConf } from "../../../../data/fixtures";

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
    expect(subjectsList.find("Connect(SubjectEditableContainer)").length).toBe(
      props.subjects.length
    );
  });

  subjectsList
    .find("Connect(SubjectEditableContainer)")
    .forEach((subjectEditableContainer, i) => {
      it(`should correctly pass 'subjectId' to 'SubjectFormContainer' for subject ${i}`, () => {
        const subjectFormContainer = subjectEditableContainer.prop("render")({
          editMode: true,
        });

        expect(subjectFormContainer.props.subjectId).toBe(props.subjects[i].id);
      });

      it("should render 'TimeForm'", () => {
        const timeForm = shallow(
          subjectEditableContainer.prop("render")({
            editMode: false,
            showTimeForm: true,
          }).props.children[0]
        );

        expect(timeForm.text()).toBe("TimeForm");
      });

      it("should call 'setShowTimeForm' callback with false", () => {
        const setShowTimeForm = jest.fn();
        const timeForm = shallow(
          subjectEditableContainer.prop("render")({
            editMode: false,
            showTimeForm: true,
            setShowTimeForm,
          }).props.children[0]
        );
        timeForm.simulate("click");

        expect(setShowTimeForm).toHaveBeenCalledWith(false);
      });

      it("should not render 'TimeForm'", () => {
        const wrapper = subjectEditableContainer.prop("render")({
          editMode: false,
          showTimeForm: false,
        }).props.children[0];

        expect(wrapper).toBe(false);
      });

      it(`should correctly pass 'subject' props to 'SubjectRow' for subject ${i}`, () => {
        const subjectRow = subjectEditableContainer.prop("render")({
          editMode: false,
          showTimeForm: false,
        }).props.children[1];

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
