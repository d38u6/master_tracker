import React from "react";
import { shallow } from "enzyme";

import Tabs from "../Tabs";
import Tab from "../Tab";

const props = { id: "test" };

describe("'Tabs' component", () => {
  describe("When tabs not have a childs and not define 'defaultActiveKey'", () => {
    const tabs = shallow(<Tabs {...props} />);

    //TabContainer
    it("render 'TabContainer' component", () => {
      expect(tabs.find("TabContainer").exists()).toBe(true);
    });

    it("'TabContainer' should contain proper props", () => {
      const desiredProps = {
        id: props.id,
        defaultActiveKey: undefined,
        transition: false,
      };
      expect(tabs.find("TabContainer").props()).toMatchObject(desiredProps);
    });

    //Nav
    it("render 'Nav' component", () => {
      expect(tabs.find("Nav").exists()).toBe(true);
    });

    it("'Nav' should contain proper props", () => {
      const desiredProps = {
        variant: "pills",
        className: "Nav",
        fill: true,
      };
      expect(tabs.find("Nav").props()).toMatchObject(desiredProps);
    });

    //Content
    it("render a 'Content' element", () => {
      expect(tabs.find(".Content").exists()).toBe(true);
    });
  });

  describe("When tabs not have a childs and define 'defaultActiveKey'", () => {
    const activeKey = "defined";
    const tabs = shallow(<Tabs {...props} defaultActiveKey={activeKey} />);

    it("'TabContainer' should contain defaultActiveKey prop", () => {
      expect(tabs.find("TabContainer").prop("defaultActiveKey")).toBe(
        activeKey
      );
    });
  });

  describe("When tabs have a childs and not define 'defaultActiveKey'", () => {
    const childs = [
      { title: "Tab 1", eventKey: "Tab1", children: [<div>content1</div>] },
      { title: "Tab 2", eventKey: "Tab2" },
    ];
    const tabs = shallow(
      <Tabs {...props}>
        {childs.map((c) => (
          <Tab {...c} key={c.eventKey} />
        ))}
      </Tabs>
    );

    //defaultActiveKey
    it("'TabContainer' should contain defaultActiveKey prop set to first child", () => {
      expect(tabs.find("TabContainer").prop("defaultActiveKey")).toBe(
        childs[0].eventKey
      );
    });

    //NavItem
    it("should render correctly number of 'NavItem' components", () => {
      expect(tabs.find("NavItem").length).toBe(childs.length);
    });

    //NavLink
    it("should render correctly number of 'NavLink' components", () => {
      expect(tabs.find("NavLink").length).toBe(childs.length);
    });

    tabs.find("NavLink").forEach((link, i) => {
      it(`'NavLink' component for ${
        i + 1
      } child, should contain correctly eventKey`, () => {
        expect(link.prop("eventKey")).toBe(childs[i].eventKey);
      });
    });

    tabs.find("NavLink").forEach((link, i) => {
      it(`'NavLink' component for ${
        i + 1
      } child, should contain correctly title text`, () => {
        expect(link.text()).toBe(childs[i].title);
      });
    });

    //TabPane
    it("should render correctly number of 'TabPane' components", () => {
      expect(tabs.find("TabPane").length).toBe(childs.length);
    });

    tabs.find("TabPane").forEach((pane, i) => {
      it(`'TabPane' component for ${
        i + 1
      } child, should contain correctly eventKey`, () => {
        expect(pane.prop("eventKey")).toBe(childs[i].eventKey);
      });
    });

    tabs.find("TabPane").forEach((pane, i) => {
      it(`'TabPane' component for ${
        i + 1
      } child, should correctly pass children prop`, () => {
        if (Boolean(childs[i].children)) {
          expect(pane.containsAllMatchingElements(childs[i].children)).toBe(
            true
          );
        }
      });
    });

    it("d38u6", () => {
      console.log(tabs.debug());
    });
  });
});
