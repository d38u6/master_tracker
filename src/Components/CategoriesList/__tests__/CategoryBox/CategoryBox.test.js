import React from "react";
import { shallow } from "enzyme";

import CategoryBox from "Components/CategoriesList/CategoryBox/CategoryBox";
import { categoryOne } from "Data/fixtures";

const props = {
  ...categoryOne,
  pickCategory: jest.fn(),
  setEditMode: jest.fn(),
};

describe("'CategoryBox' component", () => {
  const categoryBox = shallow(<CategoryBox {...props} />);

  //BoxWrapper
  it("render 'BoxWrapper' component", () => {
    expect(categoryBox.find("BoxWrapper").exists()).toBe(true);
  });

  //EditButton
  it("render 'EditButton' component", () => {
    expect(categoryBox.find("EditButton").exists()).toBe(true);
  });

  it("'EditButton'should contain correct className", () => {
    expect(categoryBox.find("EditButton").hasClass("EditButton")).toBe(true);
  });

  it("should call 'setEditMode' callback with true param", () => {
    categoryBox.find("EditButton").simulate("click");
    expect(props.setEditMode).toHaveBeenCalledWith(true);
  });

  //CardWithTheme
  it("render 'CardWithTheme' component", () => {
    expect(categoryBox.find("WithTheme(CardWithTheme)").exists()).toBe(true);
  });

  //CategoryImage
  it("render 'CategoryImage' component", () => {
    expect(categoryBox.find("CategoryImage").exists()).toBe(true);
  });

  it("'CategoryImage' contain proper 'src' prop", () => {
    expect(categoryBox.find("CategoryImage").prop("src")).toBe(props.imageSrc);
  });

  //Link
  it("render 'Link' component", () => {
    expect(categoryBox.find("Link").exists()).toBe(true);
  });

  it("'Link' component contain proper 'to' prop", () => {
    expect(categoryBox.find("Link").prop("to")).toBe(
      `/category/${props.title}/${props.id}`
    );
  });

  it("should call 'pickCategory' callback with 'id' param", () => {
    categoryBox.find("Link").simulate("click");
    expect(props.pickCategory).toHaveBeenCalledWith(props.id);
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
