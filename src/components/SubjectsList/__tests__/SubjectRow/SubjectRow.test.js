import React from "react";
import { shallow } from "enzyme";

import SubjectRow from "../../SubjectRow/SubjectRow";
import { subTwo } from "../../../../data/fixtures";
import { parseMinutes } from "../../../../utility/time";

const props = {
  ...subTwo,
  acitve: false,
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

  //td title
  it("render 'td' element with 'title' text", () => {
    expect(subjectRow.find("td").at(0).text()).toBe(props.title);
  });

  it("'td' element should contain 'Title' class", () => {
    expect(subjectRow.find("td").at(0).hasClass("Title")).toBe(true);
  });

  //td summaryTime
  it("render 'td' element with 'summaryTime' text", () => {
    expect(subjectRow.find("td").at(1).text()).toBe(
      parseMinutes(props.summaryTime)
    );
  });

  //AddTime
  it("render 'AddTime' component", () => {
    expect(subjectRow.find("AddTime").exists()).toBe(true);
  });

  it("'AddTime' should contain proper props", () => {
    const desiredProps = {
      categoryId: props.categoryId,
      subjectId: props.id,
      title: props.title,
    };
    expect(subjectRow.find("AddTime").props()).toMatchObject(desiredProps);
  });

  //EditButton
  it("render 'EditButton' component", () => {
    expect(subjectRow.find("EditButton").exists()).toBe(true);
  });

  it("should call 'setEditMode' callback with true param", () => {
    subjectRow.find("EditButton").simulate("click");
    expect(props.setEditMode).toHaveBeenCalledWith(true);
  });

  describe("when subject is not active", () => {
    it("when subject is not active 'tr' element should not contain 'Active' class", () => {
      expect(subjectRow.find("tr").hasClass("Active")).toBe(false);
    });

    it("should call 'pickSubject' callback with 'subjectId' param", () => {
      subjectRow.find("td").at(0).simulate("click");
      expect(props.pickSubject).toHaveBeenCalledWith(props.id);
    });
  });

  describe("when subject is active", () => {
    const subjectRow = shallow(<SubjectRow {...props} active />);

    it("when subject is active 'tr' element should contain 'Active' class", () => {
      expect(subjectRow.find("tr").hasClass("Active")).toBe(true);
    });

    it("should call 'pickSubject' callback with 'null' param", () => {
      subjectRow.find("td").at(0).simulate("click");
      expect(props.pickSubject).toHaveBeenCalledWith(null);
    });
  });
});
