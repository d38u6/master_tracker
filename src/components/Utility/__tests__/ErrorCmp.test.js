import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bootstrap";

import ErrorCmp from "../ErrorCmp/ErrorCmp";

const props = { error: new Error("test error") };

describe("'ErrorCmp' component", () => {
  const errorCmp = shallow(<ErrorCmp {...props} />);

  //ErrorWrapper
  it("render 'div' 'ErrorWrapper' element", () => {
    expect(errorCmp.find("div.ErrorWrapper").exists()).toBe(true);
  });

  //Header
  it("render 'h1' 'Header' element", () => {
    expect(errorCmp.find("h1.Header").exists()).toBe(true);
  });
  it("'h1' 'Header' element should contain ':( Upss...' text", () => {
    expect(errorCmp.find("h1.Header").text()).toBe(":( Upss...");
  });

  //p basic info
  it("'p' element should contain basic message", () => {
    expect(errorCmp.find("p").at(0).text()).toBe(
      "Somthing went wrong! Please refresh page and try again."
    );
  });

  //Accordion
  it("render 'Accordion' component", () => {
    expect(errorCmp.find("Accordion").exists()).toBe(true);
  });
  it("'Accordion' component should has 'MarginBottom' class", () => {
    expect(errorCmp.find("Accordion").hasClass("MarginBottom")).toBe(true);
  });

  //Accordion Toggole
  it("render 'ForwardRef' component for 'AccordionToggole'", () => {
    expect(errorCmp.find("ForwardRef").exists()).toBe(true);
  });
  it("'ForwardRef' component should contain proper props", () => {
    const desiredProps = { as: Button, variant: "info", eventKey: "0" };
    expect(errorCmp.find("ForwardRef").props()).toMatchObject(desiredProps);
  });
  it("'ForwardRef' component should contain proper text", () => {
    expect(errorCmp.find("ForwardRef").text()).toBe("Show more info");
  });

  //Accordion Collapse
  it("render 'AccordionCollapse' component", () => {
    expect(errorCmp.find("AccordionCollapse").exists()).toBe(true);
  });
  it("'AccordionCollapse' component should contain 'eventKey=0' prop ", () => {
    expect(errorCmp.find("AccordionCollapse").prop("eventKey")).toBe("0");
  });

  //span for error message
  it("render 'span' element", () => {
    expect(errorCmp.find("AccordionCollapse > span").exists()).toBe(true);
  });
  it("'span' element should has 'ErrorMsg' class", () => {
    expect(errorCmp.find("AccordionCollapse > span").hasClass("ErrorMsg")).toBe(
      true
    );
  });
  it("'span' element should contian correct error message text", () => {
    expect(errorCmp.find("AccordionCollapse > span").text()).toBe(
      props.error.message
    );
  });

  //p for restore default settings info
  it("'p' element should contain restore default settigns message", () => {
    expect(errorCmp.find("p").at(1).text()).toBe(
      "When the error occurs again try to restore the default settings"
    );
  });

  //RestoreDefaultSettingsContainer
  it("render 'RestoreDefaultSettingsContainer'", () => {
    expect(
      errorCmp.find("Connect(RestoreDefaultSettingsContainer)").exists()
    ).toBe(true);
  });

  describe("render fn prop inside RestoreDefaultSettingsContainer", () => {
    let wrapper;
    const props = { restore: jest.fn() };
    beforeEach(() => {
      wrapper = shallow(
        errorCmp
          .find("Connect(RestoreDefaultSettingsContainer)")
          .prop("render")(props)
      );
    });

    //button
    it("render 'button' element", () => {
      expect(wrapper.find("button").exists()).toBe(true);
    });
    it("'button' element should has 'btn-info' class", () => {
      expect(wrapper.find("button").hasClass("btn-info")).toBe(true);
    });
    it("'button' element should has correctly text", () => {
      expect(wrapper.find("button").text()).toBe("Restore default settings");
    });
    it("should call 'restore' callback", () => {
      wrapper.find("button").simulate("click");
      expect(props.restore).toHaveBeenCalled();
    });
  });
});
