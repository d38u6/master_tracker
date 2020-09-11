import React from "react";
import { shallow } from "enzyme";

import TitleControl from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRowForm/TitleControl/TitleControl";
import { titleConf } from "Data/fixtures";

const props = { ...titleConf };

describe("'TitleControl' component", () => {
  const titleControl = shallow(<TitleControl {...props} />);

  //td
  it("render 'td' element", () => {
    expect(titleControl.find("td").exists()).toBe(true);
  });

  it("'td' element should contain correct props", () => {
    const desiredProps = { className: "InputWrapper", colSpan: "2" };
    expect(titleControl.find("td").props()).toMatchObject(desiredProps);
  });

  //FormControl
  it("render 'FormControl' component", () => {
    expect(titleControl.find("FormControl").exists()).toBe(true);
  });

  it("'FormControl' component should contain proper props", () => {
    const desiredProps = {
      className: "TitleInput",
      type: "text",
      placeholder: "Title",
      ...props,
    };
    expect(titleControl.find("FormControl").props()).toMatchObject(
      desiredProps
    );
  });

  it("should call 'onChange' callback with new value", () => {
    const newValue = "new test title value";
    titleControl.find("FormControl").simulate("change", newValue);

    expect(props.onChange).toHaveBeenCalledWith(newValue);
  });
});
