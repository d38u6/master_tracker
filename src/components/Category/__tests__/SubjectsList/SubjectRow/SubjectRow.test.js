import React from "react";
import { shallow } from "enzyme";

import SubjectRow from "../../../SubjectsList/SubjectRow/SubjectRow";
import { subTwo } from "../../../../../data/fixtures";

const props = { ...subTwo, onEditClick: jest.fn() };

describe("'SubjectRow' component", () => {
  const subjectRow = shallow(<SubjectRow {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(subjectRow.find("tr").exists()).toBe(true);
  });

  //td title
  it("render 'td' element with 'title' text", () => {
    expect(subjectRow.find("td").at(0).text()).toBe(props.title);
  });

  //td summaryTime
  it("render 'td' element with 'summaryTime' text", () => {
    expect(subjectRow.find("td").at(1).text()).toBe(props.summaryTime);
  });

  //AddTimeButton
  it("render 'AddTimeButton' component", () => {
    expect(subjectRow.find("AddTimeButton").exists()).toBe(true);
  });

  //EditButton
  it("render 'EditButton' component", () => {
    expect(subjectRow.find("EditButton").exists()).toBe(true);
  });

  it("should call 'onEditClick' callback", () => {
    subjectRow.find("EditButton").simulate("click");
    expect(props.onEditClick).toHaveBeenCalled();
  });
});
