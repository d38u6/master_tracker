import React from "react";
import { shallow } from "enzyme";

import DotsButton from "../../Widget/ContextMenu/DotsButton/DotsButton";

const props = { className: "testClassName", onClick: jest.fn() };

describe("'DotsButton' component", () => {
  const dotsButton = shallow(<DotsButton {...props} />);

  //div
  it("render 'div' element", () => {
    expect(dotsButton.find("div").exists()).toBe(true);
  });

  it("'div' element should contain 'Button' class", () => {
    expect(dotsButton.find("div").hasClass("Button")).toBe(true);
  });

  it("'div' element should contain prop class", () => {
    expect(dotsButton.find("div").hasClass(props.className)).toBe(true);
  });

  it("when className is undefinde, 'div' element should contain empty class", () => {
    const dotsButton = shallow(<DotsButton {...props} className={undefined} />);
    expect(dotsButton.find("div").hasClass("")).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    dotsButton.simulate("click", { preventDefault: () => {} });
    expect(props.onClick).toHaveBeenCalled();
  });

  //dots
  it("render three 'dots'", () => {
    expect(dotsButton.find("span.Dot").length).toBe(3);
  });
  it("d38u6", () => {
    console.log(dotsButton.debug());
  });
});
