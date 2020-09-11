import React from "react";
import { shallow } from "enzyme";

import CategoryImage from "Components/CategoriesList/CategoryBox/CategoryImage/CategoryImage";

const props = { src: "test/soruce/image.jpg" };

describe("'CategoryImage' component", () => {
  const categoryImage = shallow(<CategoryImage {...props} />);

  //CardImg
  it("render 'CardImg' component", () => {
    expect(categoryImage.find("CardImg").exists()).toBe(true);
  });

  it("'CardImg' should containt correct 'src' prop", () => {
    expect(categoryImage.find("CardImg").prop("src")).toBe(props.src);
  });
});
