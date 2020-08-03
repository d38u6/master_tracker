import React from "react";
import { shallow } from "enzyme";

import SubjectRow from "../../SubjectRow/SubjectRow";
import { subTwo } from "../../../../data/fixtures";

const props = {
  ...subTwo,
  pickSubject: jest.fn(),
  setEditMode: jest.fn(),
  setShowTimeForm: jest.fn(),
};

describe("'SubjectRow' component", () => {
  const subjectRow = shallow(<SubjectRow {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(subjectRow.find("tr").exists()).toBe(true);
  });

  it("should call 'pickSubject' callback with 'subjectId' param", () => {
    subjectRow.find("tr").simulate("click");
    expect(props.pickSubject).toHaveBeenCalledWith(props.id);
  });

  //td title
  it("render 'td' element with 'title' text", () => {
    expect(subjectRow.find("td").at(0).text()).toBe(props.title);
  });

  //td summaryTime
  it("render 'td' element with 'summaryTime' text", () => {
    expect(subjectRow.find("td").at(1).text()).toBe(
      props.summaryTime.toString()
    );
  });

  //AddTimeButton
  it("render 'AddTimeButton' component", () => {
    expect(subjectRow.find("AddTimeButton").exists()).toBe(true);
  });

  it("should call 'setShowTimeForm' callback with true param", () => {
    subjectRow.find("AddTimeButton").simulate("click");
    expect(props.setShowTimeForm).toHaveBeenCalledWith(true);
  });

  //EditButton
  it("render 'EditButton' component", () => {
    expect(subjectRow.find("EditButton").exists()).toBe(true);
  });

  it("should call 'setEditMode' callback with true param", () => {
    subjectRow.find("EditButton").simulate("click");
    expect(props.setEditMode).toHaveBeenCalledWith(true);
  });
});
