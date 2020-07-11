import React from "react";
import { shallow } from "enzyme";

import ImageControl from "../../CategoryBoxForm/ImageControl/ImageControl";

const props = {
  activeSrc: "test/source/image.jpg",
  onSelect: jest.fn(),
  className: "testClassName",
};

describe("ImageControl component", () => {
  const imageControl = shallow(<ImageControl {...props} />);

  //div wrapper
  it("render div element with proper class name", () => {
    expect(imageControl.find("div").hasClass(props.className)).toBe(true);
  });

  //SelectImageContainer
  it("render 'SelectImageContainer' component", () => {
    expect(imageControl.find("SelectImageContainer").exists()).toBe(true);
  });

  it("'SelectImageContainer' should contain proper props", () => {
    const { className, ...desiredProps } = props;
    expect(imageControl.find("SelectImageContainer").props()).toMatchObject(
      desiredProps
    );
  });

  describe("render prop function in 'SelectImageContainer'", () => {
    let wrapper;
    beforeEach(
      () =>
        (wrapper = shallow(
          imageControl.find("SelectImageContainer").prop("render")({
            images: [],
          })
        ))
    );

    //ImageButton
    it("should render 'ImageButton' component", () => {
      expect(wrapper.find("ImageButton").exists()).toBe(true);
    });

    //ImagesModal
    it("should render 'ImagesModal' component", () => {
      expect(wrapper.find("ImagesModal").exists()).toBe(true);
    });
  });
});
