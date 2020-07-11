import React from "react";
import { shallow } from "enzyme";

import DescriptionControl from "../../CategoryBoxForm/DescriptionControl/DescriptionControl";
import { descConf } from "../../../../data/fixtures";

const props = { ...descConf };

describe("'DescriptionControl' component", () => {
  const descriptionControl = shallow(<DescriptionControl {...props} />);

  //CardText
  it("render 'CardText' component", () => {
    expect(descriptionControl.find("CardText").exists()).toBe(true);
  });

  //FormControl
  it("render 'FormControl' component", () => {
    expect(descriptionControl.find("FormControl").exists()).toBe(true);
  });

  it("'FormControl' should contain proper props", () => {
    const desiredProps = { ...props, as: "textarea" };

    expect(descriptionControl.find("FormControl").props()).toMatchObject(
      desiredProps
    );
  });

  it("should call 'onChange' callback with new value", () => {
    const newValue = "new test description value";
    descriptionControl.find("FormControl").simulate("change", newValue);

    expect(props.onChange).toHaveBeenCalledWith(newValue);
  });
});
