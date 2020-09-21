import React from "react";
import { shallow } from "enzyme";

import AddTime from "Components/SubjectsAndRecordsListTabs/SubjectsList/SubjectRow/AddTime/AddTime";

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
      dateConf: { value: new Date(), onChange: jest.fn() },
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

    //DateTimePicker
    it("render 'DateTimePicker' component", () => {
      expect(wrapper.find("WithTheme(DateTimePickerWithTheme)").exists()).toBe(
        true
      );
    });

    it("'DateTimePicker' component should contain proper 'dateConf' props", () => {
      expect(
        wrapper.find("WithTheme(DateTimePickerWithTheme)").props()
      ).toMatchObject(properties.dateConf);
    });

    it("'DateTimePicker' component should contain proper rest props", () => {
      const desiredProps = {
        className: "DatePicker",
        format: "y-MM-dd",
        clearIcon: null,
      };
      expect(
        wrapper.find("WithTheme(DateTimePickerWithTheme)").props()
      ).toMatchObject(desiredProps);
    });

    //HoursAndMinutesControl
    it("render 'HoursAndMinutesControl'", () => {
      expect(wrapper.find("HoursAndMinutesControl").exists()).toBe(true);
    });

    it("'HoursAndMinutesControl' should contain proper hoursConf prop", () => {
      expect(
        wrapper.find("HoursAndMinutesControl").prop("hoursConf")
      ).toMatchObject(properties.hoursConf);
    });

    it("'HoursAndMinutesControl' should contain proper minConf prop", () => {
      expect(
        wrapper.find("HoursAndMinutesControl").prop("minConf")
      ).toMatchObject(properties.minConf);
    });

    it("'HoursAndMinutesControl' should contain proper withMinMax prop", () => {
      expect(wrapper.find("HoursAndMinutesControl").prop("withMinMax")).toBe(
        true
      );
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
