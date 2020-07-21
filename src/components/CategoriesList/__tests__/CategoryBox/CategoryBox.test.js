import React from "react";
import { shallow } from "enzyme";

import CategoryBox from "../../CategoryBox/CategoryBox";
import { categoryOne } from "../../../../data/fixtures";

const props = { ...categoryOne, onEditClick: jest.fn(), onPick: jest.fn() };

describe("'CategoryBox' component", () => {
  const categoryBox = shallow(<CategoryBox {...props} />);

  //CategoryBoxWrapper
  it("render 'CategoryBoxWrapper' component", () => {
    expect(categoryBox.find("CategoryBoxWrapper").exists()).toBe(true);
  });

  //EditButton
  it("render 'EditButton' component", () => {
    expect(categoryBox.find("EditButton").exists()).toBe(true);
  });

  it("'EditButton'should contain correct className", () => {
    expect(categoryBox.find("EditButton").hasClass("EditButton")).toBe(true);
  });

  it("should call 'onEditClick' callback", () => {
    categoryBox.find("EditButton").simulate("click");
    expect(props.onEditClick).toHaveBeenCalled();
  });

  //CardWithTheme
  it("render 'CardWithTheme' component", () => {
    expect(categoryBox.find("WithTheme(CardWithTheme)").exists()).toBe(true);
  });

  //CategoryImage
  it("render 'CategoryImage' component", () => {
    expect(categoryBox.find("CategoryImage").exists()).toBe(true);
  });

  it("render 'CategoryImage' contain proper 'src' prop", () => {
    expect(categoryBox.find("CategoryImage").prop("src")).toBe(props.imageSrc);
  });

  //CardBody
  it("render 'CardBody' component", () => {
    expect(categoryBox.find("CardBody").exists()).toBe(true);
  });

  //CardTitle - Title
  it("render 'CardTitle' component", () => {
    expect(categoryBox.find("CardTitle").exists()).toBe(true);
  });

  it("Inside 'CardTitle' should contain correctly 'text'", () => {
    expect(categoryBox.find("CardTitle").text()).toBe(props.title);
  });

  //CardText - Description
  it("render 'CardText' component", () => {
    expect(categoryBox.find("CardText").exists()).toBe(true);
  });

  it("Inside 'CardText' should contain correctly 'text'", () => {
    expect(categoryBox.find("CardText").text()).toBe(props.desc);
  });

  //TimeCounter
  it("render 'TimeCounter' component", () => {
    expect(categoryBox.find("TimeCounter").exists()).toBe(true);
  });

  it("'TimeCounter' should contain correct 'time' prop", () => {
    expect(categoryBox.find("TimeCounter").prop("time")).toBe(props.time);
  });
});
