import React from "react";
import { shallow } from "enzyme";

import RemoveButton from "Components/CategoriesList/CategoryBoxForm/RemoveButton/RemoveButton";

const props = { onClick: jest.fn() };

describe("CategoryBoxForm - RemoveButton component", () => {
  const removeButton = shallow(<RemoveButton {...props} />);

  //CardFooter
  it("render 'CardFooter' component", () => {
    expect(removeButton.find("CardFooter").exists()).toBe(true);
  });

  //RemoveButton (Button)
  it("render 'RemoveButton' component", () => {
    expect(removeButton.find("RemoveButton").exists()).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    removeButton.find("RemoveButton").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
