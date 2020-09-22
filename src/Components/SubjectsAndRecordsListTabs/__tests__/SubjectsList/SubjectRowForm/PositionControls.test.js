import React from "react";
import { shallow } from "enzyme";

import PositionControls from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRowForm/PositionControls/PositionControls";

const props = { moveUp: jest.fn(), moveDown: jest.fn() };

describe("'PositionControls' component", () => {
  const positionControls = shallow(<PositionControls {...props} />);

  //td
  it("render 'td' element", () => {
    expect(positionControls.find("td").exists()).toBe(true);
  });

  it("'td' element should contain correct props", () => {
    const desiredProps = { className: "Controls" };
    expect(positionControls.find("td").props()).toMatchObject(desiredProps);
  });

  //'i' elements
  it("render two 'i' elements", () => {
    expect(positionControls.find("i").length).toBe(2);
  });

  it("when click on the first 'i' element should call 'moveUp' callback", () => {
    positionControls.find("i").at(0).simulate("click");
    expect(props.moveUp).toHaveBeenCalled();
  });

  it("when click on the second 'i' element should call 'moveDown' callback", () => {
    positionControls.find("i").at(1).simulate("click");
    expect(props.moveDown).toHaveBeenCalled();
  });

  //icons
  it("render 'FaArrowCircleUp' element", () => {
    expect(positionControls.find("FaArrowCircleUp").exists()).toBe(true);
  });

  it("render 'FaArrowCircleDown' element", () => {
    expect(positionControls.find("FaArrowCircleDown").exists()).toBe(true);
  });
});
