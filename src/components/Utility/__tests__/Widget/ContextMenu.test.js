import React from "react";
import { shallow } from "enzyme";

import ContextMenu from "../../Widget/ContextMenu/ContextMenu";
import DotsButton from "../../Widget/ContextMenu/DotsButton/DotsButton";
import { menuItems as items } from "../../../../data/fixtures";

const menuItems = items.map((item, i) => ({ ...item, active: i === 0 }));

const props = {
  id: "testId",
  items: menuItems,
  onSelect: jest.fn(),
  classes: { MenuButton: "MenuButton" },
};

describe("'ContextMenu' component", () => {
  const contextMenu = shallow(<ContextMenu {...props} />);

  //Dropdown
  it("render 'Dropdown' component", () => {
    expect(contextMenu.find("Dropdown").exists()).toBe(true);
  });

  //DropdownToggle
  it("render 'DropdownToggle'", () => {
    expect(contextMenu.find("DropdownToggle").exists()).toBe(true);
  });

  it("'DropdownToggle' should contain correct class", () => {
    expect(
      contextMenu.find("DropdownToggle").hasClass(props.classes.MenuButton)
    ).toBe(true);
  });

  it("when classes is not define, 'DropdownToggle' should contain empty class", () => {
    const contextMenu = shallow(<ContextMenu {...props} classes={null} />);
    expect(contextMenu.find("DropdownToggle").hasClass("")).toBe(true);
  });

  it("'DropdownToggle' should contain proper 'id' prop", () => {
    expect(contextMenu.find("DropdownToggle").prop("id")).toBe(props.id);
  });

  it("'DropdownToggle' should contain proper 'as' prop", () => {
    expect(contextMenu.find("DropdownToggle").prop("as")).toBe(DotsButton);
  });

  //DropdownMenu
  it("render 'DropdownMenu' comoponent", () => {
    expect(contextMenu.find("DropdownMenu").exists()).toBe(true);
  });

  it("'DropdownMenu' comoponent should contain 'alignRight' prop", () => {
    expect(contextMenu.find("DropdownMenu").prop("alignRight")).toBe(true);
  });

  //DropdownItems
  it("render correct number of 'DropdownItem' components", () => {
    expect(contextMenu.find("DropdownItem").length).toBe(props.items.length);
  });

  contextMenu.find("DropdownItem").forEach((dropdownItem, i) => {
    it(`'DropdownItem' ${i} should contain correct 'active' prop`, () => {
      expect(dropdownItem.prop("active")).toBe(props.items[i].active);
    });

    it(`'DropdownItem' ${i} should contain correct 'onSelect' prop`, () => {
      expect(dropdownItem.prop("onSelect")).toBe(props.onSelect);
    });

    it(`'DropdownItem' ${i} should contain correctly 'text'`, () => {
      expect(dropdownItem.text()).toBe(props.items[i].caption);
    });
  });
});
