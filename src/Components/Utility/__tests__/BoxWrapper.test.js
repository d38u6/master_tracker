import React from "react";
import { shallow } from "enzyme";

import BoxWrapper from "Components/Utility/BoxWrapper/BoxWrapper";

const props = { className: "testClassName" };

describe("'BoxWrapper' component", () => {
  const boxWrapper = shallow(<BoxWrapper {...props} />);

  //Col
  it("render 'Col' component", () => {
    expect(boxWrapper.find("Col").exists()).toBe(true);
  });

  it("'Col' component should contain 'md=4' prop", () => {
    expect(boxWrapper.find("Col").prop("md")).toBe("4");
  });

  //div
  it("render 'div' element", () => {
    expect(boxWrapper.find("div").exists()).toBe(true);
  });

  it("'div' element should containt proper class", () => {
    expect(expect(boxWrapper.find("div").hasClass(props.className)).toBe(true));
  });

  it("render without 'className' prop, div should contain only 'BoxWrapper' class", () => {
    const boxWrapper = shallow(<BoxWrapper />);
    expect(expect(boxWrapper.find("div").hasClass("BoxWrapper")).toBe(true));
  });
});
