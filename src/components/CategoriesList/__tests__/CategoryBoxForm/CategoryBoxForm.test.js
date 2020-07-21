import React from "react";
import { shallow } from "enzyme";

import CategoryBoxForm from "../../CategoryBoxForm/CategoryBoxForm";
import { categoryFormConf } from "../../../../data/fixtures";

const props = { ...categoryFormConf };

describe("'CategoryBoxForm' component", () => {
  const categoryBoxForm = shallow(<CategoryBoxForm {...props} />);

  //CategoryBoxWrapper
  it("render 'CategoryBoxWrapper' component", () => {
    expect(categoryBoxForm.find("CategoryBoxWrapper").exists()).toBe(true);
  });

  //ImageControl
  it("render 'ImageControl' component", () => {
    expect(categoryBoxForm.find("ImageControl").exists()).toBe(true);
  });

  it("'ImageControl' should containt proper props", () => {
    const desiredProps = {
      activeSrc: props.imageConf.src,
      onSelect: props.imageConf.onChange,
    };
    expect(categoryBoxForm.find("ImageControl").props()).toMatchObject(
      desiredProps
    );
  });

  //ApplyButton
  it("render 'ApplyButton' component", () => {
    expect(categoryBoxForm.find("ApplyButton").exists()).toBe(true);
  });

  it("should call 'onApplyClick' callback", () => {
    categoryBoxForm.find("ApplyButton").simulate("click");
    expect(props.onApplyClick).toHaveBeenCalled();
  });

  //CardWithTheme
  it("render 'CardWithTheme' component", () => {
    expect(categoryBoxForm.find("WithTheme(CardWithTheme)").exists()).toBe(
      true
    );
  });

  //CategoryImage
  it("render 'CategoryImage' component", () => {
    expect(categoryBoxForm.find("CategoryImage").exists()).toBe(true);
  });

  it("'CategoryImage' should contain correct 'src' prop", () => {
    expect(categoryBoxForm.find("CategoryImage").prop("src")).toBe(
      props.imageConf.src
    );
  });

  //CardBody
  it("render 'CardBody' component", () => {
    expect(categoryBoxForm.find("CardBody").exists()).toBe(true);
  });

  //TitleControl
  it("render 'TitleControl' component", () => {
    expect(categoryBoxForm.find("TitleControl").exists()).toBe(true);
  });

  it("'TitleControl' component should contain proper props", () => {
    expect(categoryBoxForm.find("TitleControl").props()).toMatchObject(
      props.titleConf
    );
  });

  it("title 'onChange' callback should be call with new value", () => {
    const newValue = "new test input value";
    categoryBoxForm.find("TitleControl").simulate("change", newValue);

    expect(props.titleConf.onChange).toHaveBeenCalledWith(newValue);
  });

  // DescriptionControl
  it("render 'DescriptionControl' component", () => {
    expect(categoryBoxForm.find("DescriptionControl").exists()).toBe(true);
  });

  it("'DescriptionControl' component should contain proper props", () => {
    expect(categoryBoxForm.find("DescriptionControl").props()).toMatchObject(
      props.descConf
    );
  });

  it("description 'onChange' callback should be call with new value", () => {
    const newValue = "new test input value";
    categoryBoxForm.find("DescriptionControl").simulate("change", newValue);

    expect(props.descConf.onChange).toHaveBeenCalledWith(newValue);
  });

  //RemoveButton
  it("render 'RemoveButton' component", () => {
    expect(categoryBoxForm.find("RemoveButton").exists()).toBe(true);
  });

  it("should call 'onRemoveClick' callback", () => {
    categoryBoxForm.find("RemoveButton").simulate("click");
    expect(props.onRemoveClick).toHaveBeenCalled();
  });
});
