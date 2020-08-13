import React from "react";
import { shallow } from "enzyme";

import SubjectsAndRecordsListTabs from "../SubjectsAndRecordsListTabs";
import { subjectsWithSummaryTime, records } from "../../../data/fixtures";

const props = {
  subjects: subjectsWithSummaryTime,
  addSubject: jest.fn(),
  records,
};

describe("'SubjectsAndRecordsListTabs' component", () => {
  const wrapper = shallow(<SubjectsAndRecordsListTabs {...props} />);

  //Tabs
  it("render 'Tabs' component", () => {
    expect(wrapper.find("Tabs").exists()).toBe(true);
  });

  it("'Tabs' component should contain 'SubjectsAndRecordsListTabs' id", () => {
    expect(wrapper.find("Tabs").prop("id")).toBe("SubjectsAndRecordsListTabs");
  });

  //Tab for SubjectsList
  it("render 'Tab' component with 'SubjectsList' eventKey and 'Subjects' title", () => {
    const desiredProps = { eventKey: "subjectsList", title: "Subjects" };
    expect(wrapper.find("Tab").at(0).props()).toMatchObject(desiredProps);
  });

  //SubjectsList
  it("render 'SubjectsList' component with 'subjects'", () => {
    expect(wrapper.find("SubjectsList").prop("subjects")).toBe(props.subjects);
  });

  //Tab for RecordsList
  it("render 'Tab' component with 'RecordsList' eventKey and 'Records' title", () => {
    const desiredProps = { eventKey: "recordsList", title: "Records" };
    expect(wrapper.find("Tab").at(1).props()).toMatchObject(desiredProps);
  });

  //RecordsList
  it("render 'RecordsList' component with 'records'", () => {
    expect(wrapper.find("RecordsList").prop("records")).toBe(props.records);
  });
});
