import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";

import { TimeFormContainer } from "../TimeFormContainer";

const props = {
  categoryId: "categoryId",
  subjectId: "subjectId",
  render: jest.fn(),
  addRecord: jest.fn(),
};

describe("'TimeFormContainer' component", () => {
  //By default
  describe("By default", () => {
    let renderProperties;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<TimeFormContainer {...props} />);
      renderProperties = props.render.mock.calls[0][0];
    });

    it("hours value prop should be '0'", () => {
      expect(renderProperties.hoursConf.value).toBe(0);
    });

    it("hours onChange prop should be 'function'", () => {
      expect(typeof renderProperties.hoursConf.onChange).toBe("function");
    });

    it("minutes value prop should be '0'", () => {
      expect(renderProperties.minConf.value).toBe(0);
    });

    it("minutes onChange prop should be 'function'", () => {
      expect(typeof renderProperties.minConf.onChange).toBe("function");
    });

    it("apply prop should be function", () => {
      expect(typeof renderProperties.apply).toBe("function");
    });
  });

  //Hours change
  describe("Whene change hours value", () => {
    let hoursOnChange;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<TimeFormContainer {...props} />);
      hoursOnChange = props.render.mock.calls[0][0].hoursConf.onChange;
    });

    describe("and value is valid", () => {
      const newValue = "9";
      let renderProperties;
      beforeEach(() => {
        hoursOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with new hours value", () => {
        expect(renderProperties.hoursConf.value).toBe(Number(newValue));
      });
    });

    describe("and value is greater than 23", () => {
      const newValue = "24";
      let renderProperties;
      beforeEach(() => {
        hoursOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with '23' hours value", () => {
        expect(renderProperties.hoursConf.value).toBe(23);
      });
    });

    describe("and value is a decimal fraction", () => {
      const newValue = "2.3";
      let renderProperties;
      beforeEach(() => {
        hoursOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with new hours value rounded to down", () => {
        expect(renderProperties.hoursConf.value).toBe(
          Math.floor(Number(newValue))
        );
      });
    });

    describe("and value is a NaN", () => {
      const newValue = "as2.3";
      let renderProperties;
      beforeEach(() => {
        hoursOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with '0' hours value", () => {
        expect(renderProperties.hoursConf.value).toBe(0);
      });
    });
  });

  //Minutes change
  describe("Whene change minutes value", () => {
    let minOnChange;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<TimeFormContainer {...props} />);
      minOnChange = props.render.mock.calls[0][0].minConf.onChange;
    });

    describe("and value is valid", () => {
      const newValue = "44";
      let renderProperties;
      beforeEach(() => {
        minOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with new MINUTES value", () => {
        expect(renderProperties.minConf.value).toBe(Number(newValue));
      });
    });

    describe("and value is greater than 59", () => {
      const newValue = "60";
      let renderProperties;
      beforeEach(() => {
        minOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with '59' minutes value", () => {
        expect(renderProperties.minConf.value).toBe(59);
      });
    });

    describe("and value is a decimal fraction", () => {
      const newValue = "25.3";
      let renderProperties;
      beforeEach(() => {
        minOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with new minutes value rounded to down", () => {
        expect(renderProperties.minConf.value).toBe(
          Math.floor(Number(newValue))
        );
      });
    });

    describe("and value is a NaN", () => {
      const newValue = "g243";
      let renderProperties;
      beforeEach(() => {
        minOnChange({ target: { value: newValue } });
        renderProperties = [...props.render.mock.calls].pop()[0];
      });

      it("should call render fn with '0' minutes value", () => {
        expect(renderProperties.minConf.value).toBe(0);
      });
    });
  });

  //apply
  describe("when apply the form", () => {
    let minValue = "44";
    let hoursValue = "23";
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<TimeFormContainer {...props} />);
      props.render.mock.calls[0][0].hoursConf.onChange({
        target: { value: hoursValue },
      });
      props.render.mock.calls[0][0].minConf.onChange({
        target: { value: minValue },
      });
      [...props.render.mock.calls].pop()[0].apply();
    });

    it("should call 'addRecord' callback", () => {
      expect(props.addRecord).toHaveBeenCalled();
    });

    it("should call 'addRecord' callback with a proper new record object", () => {
      const desiredRecord = {
        categoryId: props.categoryId,
        subjectId: props.subjectId,
        value: +hoursValue * 60 + +minValue,
      };
      const record = props.addRecord.mock.calls[0][0];
      expect(record).toMatchObject(desiredRecord);
    });

    it("a new record should contain correctly date", () => {
      const recordDate = new Date(
        props.addRecord.mock.calls[0][0].date
      ).setMilliseconds(0);
      expect(recordDate).toBe(new Date(Date.now()).setMilliseconds(0));
    });

    it("a new record object should contain valid id", () => {
      const id = props.addRecord.mock.calls[0][0].id;
      expect(shortid.isValid(id)).toBe(true);
    });

    it("should reset hours value to '0'", () => {
      const value = [...props.render.mock.calls].pop()[0].hoursConf.value;
      expect(value).toBe(0);
    });

    it("should reset miutes value to '0'", () => {
      const value = [...props.render.mock.calls].pop()[0].minConf.value;
      expect(value).toBe(0);
    });
  });
});
