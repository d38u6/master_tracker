import React from "react";
import { shallow } from "enzyme";

import TimeFormModal from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRow/AddTime/TimeFormModal/TimeFormModal";

const props = { show: true, onHide: jest.fn(), title: "title" };

describe("'TimeFormModal' component", () => {
  const timeFormModal = shallow(<TimeFormModal {...props} />);

  //ModalWithTheme
  it("render 'ModalWithTheme' component", () => {
    expect(timeFormModal.find("WithTheme(ModalWithTheme)").exists()).toBe(true);
  });

  it("'ModalWithTheme' component should contain correctly 'show' prop", () => {
    expect(timeFormModal.find("WithTheme(ModalWithTheme)").prop("show")).toBe(
      props.show
    );
  });

  it("'ModalWithTheme' component should contain correctly 'onHide' prop", () => {
    expect(timeFormModal.find("WithTheme(ModalWithTheme)").prop("onHide")).toBe(
      props.onHide
    );
  });

  it("'ModalWithTheme' component should contain 'centered' prop", () => {
    expect(
      timeFormModal.find("WithTheme(ModalWithTheme)").prop("centered")
    ).toBe(true);
  });

  //ModalHeader
  it("render 'ModalHeader' component", () => {
    expect(timeFormModal.find("ModalHeader").exists()).toBe(true);
  });

  it("'ModalHeader' component should contain 'closeButton' prop", () => {
    expect(timeFormModal.find("ModalHeader").prop("closeButton")).toBe(true);
  });

  //ModalTitle
  it("render 'ModalTitle' component", () => {
    expect(timeFormModal.find("ModalTitle").exists()).toBe(true);
  });

  it("'ModalTitle' component should contain correctly 'title' text", () => {
    expect(timeFormModal.find("ModalTitle").text()).toBe(
      `Add Time For "${props.title}"`
    );
  });

  //ModalBody
  it("render 'ModalBody' component", () => {
    expect(timeFormModal.find("ModalBody").exists()).toBe(true);
  });

  //Form
  it("render 'Form' component", () => {
    expect(timeFormModal.find("Form").exists()).toBe(true);
  });

  it("'Form' component should contain 'Form' class", () => {
    expect(timeFormModal.find("Form").hasClass("Form")).toBe(true);
  });
});
