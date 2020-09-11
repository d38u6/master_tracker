import React from "react";
import { shallow } from "enzyme";

import TimeCounter from "Components/CategoriesList/CategoryBox/TimeCounter/TimeCounter";

const props = { time: 1258 };

describe("'TimeCounter' component", () => {
  const timeCounter = shallow(<TimeCounter {...props} />);

  //CardFooter
  it("render 'CardFooter' component", () => {
    expect(timeCounter.find("CardFooter").exists()).toBe(true);
  });

  //small
  it("render 'small' element", () => {
    expect(timeCounter.find("small").exists()).toBe(true);
  });

  it("'small' element should contain 'text-muted' class", () => {
    expect(timeCounter.find("small").hasClass("text-muted")).toBe(true);
  });

  it("text in 'small' element should be matches to 'time' prop", () => {
    expect(timeCounter.find("small").text()).toBe(props.time.toString());
  });
});
