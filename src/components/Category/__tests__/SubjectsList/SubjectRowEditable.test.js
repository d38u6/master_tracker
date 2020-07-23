import React from "react";
import { shallow } from "enzyme";

import { SubjectRowEditable } from "../../SubjectsList/SubjectRowEditable/SubjectRowEditable";
import { subOne, subjectFormConf } from "../../../../data/fixtures";

const props = { ...subOne };

describe("'SubjectRowEditable' component", () => {
  const subjectRowEditable = shallow(<SubjectRowEditable {...props} />);

  //SubjectRow
  it("default render 'SubjectRow' component", () => {
    expect(subjectRowEditable.find("SubjectRow").exists()).toBe(true);
  });

  it("'SubjectRow' should contain proper props", () => {
    expect(subjectRowEditable.find("SubjectRow").props()).toMatchObject(props);
  });

  describe("when click 'edit'", () => {
    let subjectRowEditable;
    beforeEach(() => {
      subjectRowEditable = shallow(<SubjectRowEditable {...props} />);
      subjectRowEditable.find("SubjectRow").prop("onEditClick")();
    });

    //SubjectFormContainer
    it("render 'SubjectFormContainer'", () => {
      expect(
        subjectRowEditable.find("Connect(SubjectFormContainer)").exists()
      ).toBe(true);
    });

    it("'SubjectFormContainer' should contain correct 'subjectId' prop", () => {
      expect(
        subjectRowEditable
          .find("Connect(SubjectFormContainer)")
          .prop("subjectId")
      ).toBe(props.id);
    });

    //render prop in SubjectFormContainer
    it("render prop function in 'SubjectFormContainer', should render 'tr' element", () => {
      const wrapper = shallow(
        subjectRowEditable.find("Connect(SubjectFormContainer)").prop("render")(
          subjectFormConf
        )
      );
      expect(wrapper.find("tr").exists()).toBe(true);
    });

    it("when click save, should again render 'SubjectRow'", () => {
      subjectRowEditable.find("Connect(SubjectFormContainer)").prop("onSave")();
      expect(subjectRowEditable.find("SubjectRow").exists()).toBe(true);
    });
  });
});
