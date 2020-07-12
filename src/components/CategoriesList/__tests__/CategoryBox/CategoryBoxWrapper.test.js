import React from "react";
import { shallow } from "enzyme";

import CategoryBoxWrapper from "../../CategoryBox/CategoryBoxWrapper/CategoryBoxWrapper";

const props = { className: "testClassName" };

describe("'CategoryBoxWrapper' component", () => {
  const categoryBoxWrapper = shallow(<CategoryBoxWrapper {...props} />);

  //Col
  it("render 'Col' component", () => {
    expect(categoryBoxWrapper.find("Col").exists()).toBe(true);
  });

  it("'Col' component should contain 'md=4' prop", () => {
    expect(categoryBoxWrapper.find("Col").prop("md")).toBe("4");
  });

  //div
  it("render 'div' element", () => {
    expect(categoryBoxWrapper.find("div").exists()).toBe(true);
  });

  it("'div' element should containt proper class", () => {
    expect(
      expect(categoryBoxWrapper.find("div").hasClass(props.className)).toBe(
        true
      )
    );
  });
});
