import React from "react";
import { shallow } from "enzyme";

import AddTime from "../../../SubjectRow/AddTime/AddTime";

const props = {
  categoryId: "categoryId",
  subjectId: "subjectId",
  title: "Test title",
};

describe("'AddTime' component", () => {
  const addTime = shallow(<AddTime {...props} />);

  //TimeFormContainer
  it("render 'TimeFormContainer'", () => {
    expect(addTime.find("Connect(TimeFormContainer)").exists()).toBe(true);
  });

  it("'TimeFormContainer' should contain proper props", () => {
    expect(addTime.find("Connect(TimeFormContainer)").props()).toMatchObject(
      props
    );
  });

  describe("render prop fn inside TimeFormContainer", () => {
    const properties = {
      hoursConf: { value: 0, onChange: jest.fn() },
      minConf: { value: 0, onChange: jest.fn() },
      apply: jest.fn(),
    };
    let wrapper = shallow(
      addTime.find("Connect(TimeFormContainer)").prop("render")(properties)
    );

    //TimeFormModal
    it("render 'TimeFormModal'", () => {
      expect(wrapper.find("TimeFormModal").exists()).toBe(true);
    });

    it("'TimeFormModal' default should have set show prop to false", () => {
      expect(wrapper.find("TimeFormModal").prop("show")).toBe(false);
    });

    it("'TimeFormModal' should contain proper title prop", () => {
      expect(wrapper.find("TimeFormModal").prop("title")).toBe(props.title);
    });

    //Hours TimeControl
    it("render 'TimeControl' componetn with 'Hours' label", () => {
      expect(wrapper.find("TimeControl").at(0).prop("label")).toBe("Hours");
    });

    it("Hours 'TimeControl' should contain correctly 'value'", () => {
      expect(wrapper.find("TimeControl").at(0).prop("value")).toBe(
        properties.hoursConf.value
      );
    });

    it("Hours 'TimeControl' should contain proper 'min' and 'max' props", () => {
      expect(wrapper.find("TimeControl").at(0).props()).toMatchObject({
        min: "0",
        max: "23",
      });
    });

    it("should call 'onChange' callback for hours", () => {
      wrapper.find("TimeControl").at(0).simulate("change");
      expect(properties.hoursConf.onChange).toHaveBeenCalled();
    });

    //Minutes TimeControl
    it("render 'TimeControl' componetn with 'Minutes' label", () => {
      expect(wrapper.find("TimeControl").at(1).prop("label")).toBe("Minutes");
    });

    it("Minutes 'TimeControl' should contain correctly 'value'", () => {
      expect(wrapper.find("TimeControl").at(1).prop("value")).toBe(
        properties.minConf.value
      );
    });

    it("Minutes 'TimeControl' should contain proper 'min' and 'max' props", () => {
      expect(wrapper.find("TimeControl").at(1).props()).toMatchObject({
        min: "0",
        max: "59",
      });
    });

    it("should call 'onChange' callback for minutes", () => {
      wrapper.find("TimeControl").at(1).simulate("change");
      expect(properties.minConf.onChange).toHaveBeenCalled();
    });

    //Apply Button
    it("render 'Button' component", () => {
      expect(wrapper.find("Button").exists()).toBe(true);
    });

    it("render 'ADD' text inside 'Button' component", () => {
      expect(wrapper.find("Button").text()).toBe("ADD");
    });

    it("should call 'apply' callback", () => {
      wrapper.find("Button").simulate("click");
      expect(properties.apply).toHaveBeenCalled();
    });

    //AddTimeButton
    it("render 'AddTimeButton' component", () => {
      expect(wrapper.find("AddTimeButton").exists()).toBe(true);
    });

    describe("when click a 'AddTimeButton'", () => {
      beforeEach(() => {
        wrapper.find("AddTimeButton").simulate("click");
        wrapper = shallow(
          addTime.find("Connect(TimeFormContainer)").prop("render")(properties)
        );
      });

      it("should change show prop for 'TimeFormModal' to true", () => {
        expect(wrapper.find("TimeFormModal").prop("show")).toBe(true);
      });

      describe("and when 'hide' modal", () => {
        beforeEach(() => {
          wrapper.find("TimeFormModal").prop("onHide")();
          wrapper = shallow(
            addTime.find("Connect(TimeFormContainer)").prop("render")(
              properties
            )
          );
        });

        it("should change show prop for 'TimeFormModal' to false", () => {
          expect(wrapper.find("TimeFormModal").prop("show")).toBe(false);
        });
      });
    });
  });
});
