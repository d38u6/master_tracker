import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";

import { CategoryContainer, calculateSummaryTime } from "../CategoryContainer";
import { subjects, categories, records } from "../../../data/fixtures";
import { newSubject } from "../../../data/subjects";

const categoryId = categories[0].id;
const props = {
  categories,
  subjects,
  records,
  currentCategory: categoryId,
  match: { params: { id: categoryId } },
  pickCategory: jest.fn(),
  addSubject: jest.fn(),
  render: jest.fn(),
};
let useEffect;
const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

describe("'CategoryContainer' component", () => {
  describe("When category exists and picked", () => {
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists
      mockUseEffect(); //useRecords
      shallow(<CategoryContainer {...props} />);
    });

    it("should call 'render' function with 'subjects'", () => {
      expect(props.render.mock.calls[1][0].subjects).toMatchObject(
        props.subjects.filter((sub) => sub.categoryId === categoryId)
      );
    });

    it(`should correctly calculate summary time for each subject`, () => {
      const categoryRecords = props.records.filter(
        (r) => r.categoryId === categoryId
      );
      props.render.mock.calls[1][0].subjects.forEach(({ id, summaryTime }) => {
        expect(summaryTime).toBe(calculateSummaryTime(id, categoryRecords));
      });
    });

    it("should call 'render' function with 'records'", () => {
      const categoryRecords = props.records.filter(
        (r) => r.categoryId === categoryId
      );
      expect(props.render.mock.calls[1][0].records).toMatchObject(
        categoryRecords
      );
    });

    it("should call 'render' function with 'addSubject' function", () => {
      expect(typeof props.render.mock.calls[1][0].addSubject).toBe("function");
    });

    it("should not call 'pickCategory' callback", () => {
      expect(props.pickCategory).toHaveBeenCalledTimes(0);
    });
  });

  describe("'render' function callbacks", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryContainer {...props} />);
    });

    //addSubject
    it("should call 'addSubject' callback with newSubject data", () => {
      props.render.mock.calls[0][0].addSubject();
      expect(props.addSubject.mock.calls[0][0]).toMatchObject(newSubject);
    });

    it("should create valid id for newSubject", () => {
      props.render.mock.calls[0][0].addSubject();

      const id = props.addSubject.mock.calls[0][0].id;
      expect(shortid.isValid(id)).toBe(true);
    });

    it("should call 'addSubject' callback with proper 'categoryId'", () => {
      props.render.mock.calls[0][0].addSubject();

      expect(props.addSubject.mock.calls[0][0].categoryId).toBe(categoryId);
    });

    //addRecord in future
  });

  describe("When category exists but not picked", () => {
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists

      shallow(<CategoryContainer {...props} currentCategory="" />);
    });

    it("should call 'pickCategory' callback with 'categoryId'", () => {
      expect(props.pickCategory).toHaveBeenCalledWith(categoryId);
    });

    it("should call 'render' function with 'records'", () => {
      const categoryRecords = props.records.filter(
        (r) => r.categoryId === categoryId
      );
      expect(props.render.mock.calls[1][0].records).toMatchObject(
        categoryRecords
      );
    });
  });

  describe("When category does not exists", () => {
    let wrapper;
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists

      wrapper = shallow(
        <CategoryContainer
          {...props}
          match={{ params: { id: "categoryId" } }}
        />
      );
    });

    it("should render 'Redirect' component", () => {
      expect(wrapper.find("Redirect").exists()).toBe(true);
    });

    it("'Redirect' component should redirect  to '/' path", () => {
      expect(wrapper.find("Redirect").prop("to")).toBe("/");
    });
  });
});
