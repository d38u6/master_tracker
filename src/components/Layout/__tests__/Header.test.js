import React from "react";
import { shallow } from "enzyme";

import { Header } from "../Header/Header";
import { theme } from "../../../data/fixtures";

const props = { theme };

describe("'Header' component", () => {
  const header = shallow(<Header {...props} />);

  //Navbar
  it("render 'Navbar' component", () => {
    expect(header.find("Navbar").exists()).toBe(true);
  });

  it("'Navbar' should contain proper 'bg' prop", () => {
    expect(header.find("Navbar").prop("bg")).toBe(props.theme.bg);
  });

  it("'Navbar' should contain proper 'variant' prop", () => {
    expect(header.find("Navbar").prop("variant")).toBe(props.theme.bg);
  });

  it("'Navbar' should contain 'justify-content-between' class", () => {
    expect(header.find("Navbar").hasClass("justify-content-between")).toBe(
      true
    );
  });

  //NavbarBrand
  it("render 'NavbarBrand' component", () => {
    expect(header.find("NavbarBrand").exists()).toBe(true);
  });

  it("'NavbarBrand' should contain '/' 'to' prop", () => {
    expect(header.find("NavbarBrand").prop("to")).toBe("/");
  });

  it("'NavbarBrand' should contain 'Master Tracker' text", () => {
    expect(header.find("NavbarBrand").text()).toBe("Master Tracker");
  });

  //Navigation
  it("render 'Navigation' component", () => {
    expect(header.find("Navigation").exists()).toBe(true);
  });

  //ToggleThemeButton
  it("render 'ToggleThemeButton' component", () => {
    expect(header.find("ToggleThemeButton").exists()).toBe(true);
  });
});
