import React from "react";
import { shallow } from "enzyme";

import { ModalWithTheme } from "../ModalWithTheme/ModalWithTheme";
import { theme } from "../../../data/fixtures";

const props = { theme, moadlProps: "example", diffrentProp: "example" };

describe("'ModalWithTheme' component", () => {
  const modalWithTheme = shallow(<ModalWithTheme {...props} />);

  //Modal
  it("render 'Modal' component", () => {
    expect(modalWithTheme.find("Bootstrap(Modal)").exists()).toBe(true);
  });

  it("'Moda' should containt proper props", () => {
    const { theme, ...desiredProps } = props;
    expect(modalWithTheme.find("Bootstrap(Modal)").props()).toMatchObject(
      desiredProps
    );
  });

  //div
  it("redner 'div' element inside 'Modal'", () => {
    expect(modalWithTheme.find("Bootstrap(Modal) > div").exists()).toBe(true);
  });

  it("'div' contain correctly class", () => {
    const themeClassName =
      props.theme.bg.charAt(0).toUpperCase() + props.theme.bg.slice(1);

    expect(
      modalWithTheme.find("Bootstrap(Modal) > div").hasClass(themeClassName)
    ).toBe(true);
  });
});
