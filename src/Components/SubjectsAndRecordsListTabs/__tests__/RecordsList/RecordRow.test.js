import React from "react";
import { shallow } from "enzyme";

import RecordRow from "Components/SubjectsAndRecordsListTabs/RecordsList/RecordRow/RecordRow";
import { record } from "Data/fixtures";
import { parseMinutes } from "Utility/time";

const props = { ...record, subjectTitle: "Subject", removeRecord: jest.fn() };

describe("'RecordRow' component", () => {
  const recordRow = shallow(<RecordRow {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(recordRow.find("tr").exists()).toBe(true);
  });

  //td subject title
  it("render 'td' element for subject title", () => {
    expect(recordRow.find("td").at(0).exists()).toBe(true);
  });

  it("'td' element for subject title should contain correctly subject title text", () => {
    expect(recordRow.find("td").at(0).text()).toBe(props.subjectTitle);
  });

  //td date
  it("render 'td' element for date", () => {
    expect(recordRow.find("td").at(1).exists()).toBe(true);
  });

  it("'td' element for date should contain correctly date text", () => {
    expect(recordRow.find("td").at(1).text()).toBe(
      new Date(props.date).toLocaleDateString()
    );
  });

  //td time
  it("render 'td' element for time", () => {
    expect(recordRow.find("td").at(2).exists()).toBe(true);
  });

  it("'td' element for time should contain correctly time text", () => {
    expect(recordRow.find("td").at(2).text()).toBe(parseMinutes(props.value));
  });

  //RemoveButtonCol
  it("render 'RemoveButtonCol' component", () => {
    expect(recordRow.find("RemoveButtonCol").exists()).toBe(true);
  });

  it("should call 'removeRecord' callback ", () => {
    recordRow.find("RemoveButtonCol").simulate("click");
    expect(props.removeRecord).toHaveBeenCalled();
  });
});
