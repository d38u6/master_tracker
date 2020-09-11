import React from "react";
import { shallow } from "enzyme";

import SelectImage from "Components/Utility/SelectImage/SelectImage";
import { images } from "Data/fixtures";

const props = { images, onImageClick: jest.fn() };

describe("'SelectImage' component", () => {
  const selectImage = shallow(<SelectImage {...props} />);

  //ImageButton
  it("render 'ImageButton' component", () => {
    expect(selectImage.find("ImageButton").exists()).toBe(true);
  });

  //ImagesModal
  it("render 'ImagesModal' component", () => {
    expect(selectImage.find("ImagesModal").exists()).toBe(true);
  });

  it("default 'ImagesModal' should contain 'fals' 'show' prop", () => {
    expect(selectImage.find("ImagesModal").prop("show")).toBe(false);
  });

  //Images
  it("render correct number of 'ImageBox' component", () => {
    expect(selectImage.find("ImageBox").length).toBe(props.images.length);
  });

  selectImage.find("ImageBox").forEach((imageBox, i) =>
    it(`'ImageBox' ${i} should contain proper props`, () => {
      expect(imageBox.props()).toMatchObject({
        ...props.images[i],
      });
    })
  );

  selectImage.find("ImageBox").forEach((imageBox, i) =>
    it(`should call 'onImageClick' callback ${i + 1} times`, () => {
      imageBox.simulate("click");
      expect(props.onImageClick).toHaveBeenCalledTimes(i + 1);
    })
  );

  describe("when click on the 'ImageButton'", () => {
    let selectImage;
    beforeEach(() => {
      selectImage = shallow(<SelectImage {...props} />);
      selectImage.find("ImageButton").simulate("click");
    });

    it("should toggle to true 'show' 'prop' in 'ImagesModal' component", () => {
      expect(selectImage.find("ImagesModal").prop("show")).toBe(true);
    });

    it("'onHide' function should toggle to false 'show' 'prop' in 'ImagesModal'", () => {
      selectImage.find("ImagesModal").prop("onHide")();
      expect(selectImage.find("ImagesModal").prop("show")).toBe(false);
    });
  });
});
