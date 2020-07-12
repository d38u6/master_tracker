import React from "react";
import { shallow } from "enzyme";

import EditButton from "../../CategoryBox/EditButton/EditButton";

const props = { className: "testClassName", onClick: jest.fn() };

describe("'EditButton' component", () => {
  const editButton = shallow(<EditButton {...props} />);

  //CircleButtonWrapper
  it("render 'CircleButtonWrapper' component", () => {
    expect(editButton.find("CircleButtonWrapper").exists()).toBe(true);
  });

  it("'CircleButtonWrapper' should contain proper class", () => {
    expect(
      editButton.find("CircleButtonWrapper").hasClass(props.className)
    ).toBe(true);
  });

  //EditButton (Button)
  it("render 'EditButton' component", () => {
    expect(editButton.find("EditButton").exists()).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    editButton.find("EditButton").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
