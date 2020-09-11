import React from "react";
import { shallow } from "enzyme";

import ApplyButton from "Components/CategoriesList/CategoryBoxForm/ApplyButton/ApplyButton";

const props = { onClick: jest.fn() };

describe("CategoryBoxForm - ApplyButton component", () => {
  const applyButton = shallow(<ApplyButton {...props} />);

  //CircleButtonWrapper
  it("render 'CircleButtonWrapper' component", () => {
    expect(applyButton.find("CircleButtonWrapper").exists()).toBe(true);
  });

  //ApplyButton (Button)
  it("render 'ApplyButton' component", () => {
    expect(applyButton.find("ApplyButton").exists()).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    applyButton.find("ApplyButton").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
