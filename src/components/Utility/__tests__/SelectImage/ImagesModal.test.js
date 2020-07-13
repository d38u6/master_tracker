import React from "react";
import { shallow } from "enzyme";

import ImagesModal from "../../SelectImage/ImagesModal/ImagesModal";

const props = { show: true, onHide: jest.fn() };

describe("'ImagesModal' component", () => {
  const imagesModal = shallow(<ImagesModal {...props} />);

  //ModalWithTheme
  it("render 'ModalWithTheme' component", () => {
    expect(imagesModal.find("WithTheme(ModalWithTheme)").exists()).toBe(true);
  });

  it("'ModalWithTheme' should contain proper props", () => {
    expect(imagesModal.find("WithTheme(ModalWithTheme)").props()).toMatchObject(
      props
    );
  });

  //ModalHeader
  it("render 'ModalHeader' component", () => {
    expect(imagesModal.find("ModalHeader").exists()).toBe(true);
  });

  it("'ModalHeader' should contain 'closeButton' prop", () => {
    expect(imagesModal.find("ModalHeader").prop("closeButton")).toBe(true);
  });

  //ModalTitle
  it("render 'ModalTitle' component", () => {
    expect(imagesModal.find("ModalTitle").exists()).toBe(true);
  });

  it("'ModalTitle' should contain 'Choose Image' text", () => {
    expect(imagesModal.find("ModalTitle").text()).toBe("Choose Image");
  });

  //ModalBody
  it("render 'ModalBody' component", () => {
    expect(imagesModal.find("ModalBody").exists()).toBe(true);
  });

  //Row
  it("render 'Row' component in 'ModalBody'", () => {
    expect(imagesModal.find("ModalBody > Row").exists()).toBe(true);
  });
});
