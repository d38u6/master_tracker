import React from "react";
import { shallow } from "enzyme";

import SelectImageContainer from "../CategoryForm/SelectImage/SelectImageContainer";
import { loadCategoriesImage } from "../../../utility/imagesLoader";
const loadedImages = loadCategoriesImage();

const props = {
  activeSrc: loadedImages[0].src,
  onSelect: jest.fn(),
  render: jest.fn(),
};
let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

describe("'SelectImageContainer' component", () => {
  shallow(<SelectImageContainer {...props} />);
  useEffect();

  //onImageClick
  it("should call 'render' function with 'onImageClick'", () => {
    const { onImageClick } = props.render.mock.calls[0][0];
    expect(typeof onImageClick).toBe("function");
  });

  describe("when change image", () => {
    const newSrc = loadedImages[2].src;
    beforeEach(() => {
      const { onImageClick } = [...props.render.mock.calls].pop()[0];
      onImageClick(newSrc);
    });

    it("should call 'onSelect' callback with new 'src'", () => {
      expect(props.onSelect).toHaveBeenLastCalledWith(newSrc);
    });

    it("should call 'render' function with new images array", () => {
      const { images } = [...props.render.mock.calls].pop()[0];
      expect(images).toMatchObject(
        loadedImages.map((image) => ({
          ...image,
          active: newSrc === image.src,
        }))
      );
    });
  });

  //images
  it("should call 'render' function with 'images'", () => {
    jest.clearAllMocks();
    useEffect();
    const { images } = [...props.render.mock.calls].pop()[0];

    expect(images).toMatchObject(
      loadedImages.map((image) => ({
        ...image,
        active: props.activeSrc === image.src,
      }))
    );
  });
});
