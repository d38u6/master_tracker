import React from "react";
import { shallow } from "enzyme";

import EditButton from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRow/EditButton/EditButton";

const props = { onClick: jest.fn() };

describe("'EditButton' component", () => {
  const editButton = shallow(<EditButton {...props} />);

  //td
  it("render 'td' element", () => {
    expect(editButton.find("td").exists()).toBe(true);
  });

  it("'td' element should contain 'EditButton' class", () => {
    expect(editButton.find("td").hasClass("EditButton")).toBe(true);
  });

  //div
  it("render 'div' element", () => {
    expect(editButton.find("div").exists()).toBe(true);
  });

  it("'div' element should contain proper props", () => {
    const desiredProps = { className: "Button", onClick: props.onClick };
    expect(editButton.find("div").props()).toMatchObject(desiredProps);
  });

  it("should call 'onClick' callback", () => {
    editButton.find("div").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //FaPencilAlt icon
  it("render 'FaPencilAlt' icon inside 'div'", () => {
    expect(editButton.find("div > FaPencilAlt").exists()).toBe(true);
  });

  describe("Whene button is disabled", () => {
    const editButton = shallow(<EditButton {...props} disabled={true} />);

    it("'td' element should be empty", () => {
      expect(editButton.find("td").children().isEmptyRender()).toBe(true);
    });
  });
});
