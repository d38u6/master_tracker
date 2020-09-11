import React from "react";
import { shallow } from "enzyme";

import TitleControl from "Components/CategoriesList/CategoryBoxForm/TitleControl/TitleControl";
import { titleConf } from "Data/fixtures";

const props = { ...titleConf };

describe("'TitleControl' component", () => {
  const titleControl = shallow(<TitleControl {...props} />);

  //CardTitle
  it("render 'CardTitle' component", () => {
    expect(titleControl.find("CardTitle").exists()).toBe(true);
  });

  //FormControl
  it("render 'FormControl' component", () => {
    expect(titleControl.find("FormControl").exists()).toBe(true);
  });

  it("'FormControl' should contain proper props", () => {
    expect(titleControl.find("FormControl").props()).toMatchObject(props);
  });

  it("should call 'onChange' callback with new value", () => {
    const newValue = "new test title value";
    titleControl.find("FormControl").simulate("change", newValue);

    expect(props.onChange).toHaveBeenCalledWith(newValue);
  });
});
