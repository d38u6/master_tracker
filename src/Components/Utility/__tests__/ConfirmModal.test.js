import React from "react";
import { shallow } from "enzyme";

import ConfirmModal from "Components/Utility/ConfirmModal/ConfirmModal";

const props = {
  title: "test confirm modal",
  body: "example body text",
  options: [
    {
      caption: "Close",
      variant: "secondary",
      onClick: jest.fn(),
      className: "left",
    },
    { caption: "No", variant: "danger", onClick: jest.fn() },
    { caption: "Yes", variant: "success", onClick: jest.fn() },
  ],
};

describe("'ConfirmModal' component", () => {
  const confirmModal = shallow(<ConfirmModal {...props} />);

  //theme
  it("render a 'Theme' component", () => {
    expect(confirmModal.find("Theme").exists()).toBe(true);
  });

  //ModalWithTheme
  it("render 'ModalWithTheme' component", () => {
    expect(confirmModal.find("WithTheme(ModalWithTheme)").exists()).toBe(true);
  });

  it("'ModalWithTheme' component should contain proper props", () => {
    const desiredProps = { show: true, backdrop: "static", centered: true };
    expect(
      confirmModal.find("WithTheme(ModalWithTheme)").props()
    ).toMatchObject(desiredProps);
  });

  //ModalHeader
  it("render 'ModalHeader' component", () => {
    expect(confirmModal.find("ModalHeader").exists()).toBe(true);
  });

  it("'ModalHeader' component should set closeButton prop to false", () => {
    expect(confirmModal.find("ModalHeader").prop("closeButton")).toBe(false);
  });

  //ModalTitle
  it("render 'ModalTitle' component", () => {
    expect(confirmModal.find("ModalTitle").exists()).toBe(true);
  });

  it("'ModalTitle' component should contain correctly 'title' text", () => {
    expect(confirmModal.find("ModalTitle > span").text()).toBe(props.title);
  });

  //ModalBody
  it("render 'ModalBody' component", () => {
    expect(confirmModal.find("ModalBody").exists()).toBe(true);
  });

  it("'ModalBody' component should contain correctly 'body' text", () => {
    expect(confirmModal.find("ModalBody > span").text()).toBe(props.body);
  });

  //ModalFooter
  it("render 'ModalFooter' component", () => {
    expect(confirmModal.find("ModalFooter").exists()).toBe(true);
  });

  //Options
  it("render correct number of options buttons", () => {
    expect(confirmModal.find("ModalFooter > Button").length).toBe(
      props.options.length
    );
  });

  confirmModal.find("ModalFooter > Button").forEach((btn, i) => {
    it(`Option 'Button' ${i} should contain proper props`, () => {
      const { caption, ...rest } = props.options[i];
      expect(btn.props()).toMatchObject(rest);
    });

    it(`Option 'Button' ${i} should contain correctly 'caption' text`, () => {
      const { caption, ...rest } = props.options[i];
      expect(btn.find("span").text()).toBe(caption);
    });
  });
});
