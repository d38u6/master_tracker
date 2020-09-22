import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";
import compareFunc from "compare-func";

import {
  CategoryContainer,
  calculateSummaryTime,
} from "Containers/Category/CategoryContainer";
import { subjects, categories, records } from "Data/fixtures";
import { newSubject } from "Data/subjects";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

alert.showAlert = jest.fn();

const categoryId = categories[0].id;
const props = {
  categories,
  subjects,
  records,
  currentCategory: categoryId,
  currentSubject: null,
  match: { params: { id: categoryId } },
  pickCategory: jest.fn(),
  pickSubject: jest.fn(),
  addSubject: jest.fn(),
  render: jest.fn(),
};
let useEffect;
const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

describe("'CategoryContainer' component", () => {
  describe("When category exists and picked", () => {
    let renderProperties;
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists
      mockUseEffect(); //setCurrentSubject
      shallow(<CategoryContainer {...props} />);
      renderProperties = [...props.render.mock.calls].pop()[0];
    });

    it("should call 'render' function with 'subjects'", () => {
      const categoryRecords = props.records.filter(
        (r) => r.categoryId === categoryId
      );
      const catTime = categoryRecords.reduce((pv, { value }) => pv + value, 0);
      const generalSubject = {
        id: "general",
        title: "Genral",
        categoryId: props.currentCategory || "",
        summaryTime: catTime,
        active: props.currentSubject === "general" || !props.currentSubject,
        editable: false,
      };
      const catSubjects = props.subjects
        .filter((sub) => sub.categoryId === categoryId)
        .map((sub) => ({
          ...sub,
          summaryTime: calculateSummaryTime(sub.id, categoryRecords),
          active: sub.id === props.currentSubject,
          editable: true,
        }))
        .sort(compareFunc("position"));

      expect(renderProperties.subjects).toStrictEqual([
        generalSubject,
        ...catSubjects,
      ]);
    });

    it("should call 'render' function with 'enriched records'", () => {
      const catSubjects = props.subjects.filter(
        (sub) => sub.categoryId === categoryId
      );
      const categoryRecords = props.records
        .filter((r) => r.categoryId === categoryId)
        .sort((a, b) => b.date - a.date)
        .map((r) => ({
          ...r,
          subjectTitle:
            catSubjects.find(({ id }) => id === r.subjectId)?.title ||
            "General",
        }));

      expect(renderProperties.records).toStrictEqual(categoryRecords);
    });

    it("should call 'render' function with 'addSubject' function", () => {
      expect(typeof renderProperties.addSubject).toBe("function");
    });

    it("should not call 'pickCategory' callback", () => {
      expect(props.pickCategory).toHaveBeenCalledTimes(0);
    });

    it("should call 'pickSubject' callback with 'null'", () => {
      expect(props.pickSubject).toHaveBeenCalledWith(null);
    });
  });

  describe("When category exists but not picked", () => {
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists
      mockUseEffect(); //useExists

      shallow(<CategoryContainer {...props} currentCategory="" />);
    });

    it("should call 'pickCategory' callback with 'categoryId'", () => {
      expect(props.pickCategory).toHaveBeenCalledWith(categoryId);
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

  describe("When subjects is picked", () => {
    const subjectId = subjects[3].id;
    let renderProperties;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryContainer {...props} currentSubject={subjectId} />);
      renderProperties = [...props.render.mock.calls].pop()[0];
    });

    it("should call 'render' function with subjects", () => {
      const categoryRecords = props.records.filter(
        (r) => r.categoryId === categoryId
      );
      const catTime = categoryRecords.reduce((pv, { value }) => pv + value, 0);
      const generalSubject = {
        id: "general",
        title: "Genral",
        categoryId: props.currentCategory || "",
        summaryTime: catTime,
        active: subjectId === "general" || !subjectId,
        editable: false,
      };
      const catSubjects = props.subjects
        .filter((sub) => sub.categoryId === categoryId)
        .map((sub) => ({
          ...sub,
          summaryTime: calculateSummaryTime(sub.id, categoryRecords),
          active: sub.id === subjectId,
          editable: true,
        }))
        .sort(compareFunc("position"));

      expect(renderProperties.subjects).toStrictEqual([
        generalSubject,
        ...catSubjects,
      ]);
    });

    it("should call 'render' function with filtered 'records'", () => {
      const catSubjects = props.subjects.filter(
        (sub) => sub.categoryId === categoryId
      );
      const categoryRecords = props.records
        .filter((r) => r.categoryId === categoryId && r.subjectId === subjectId)
        .sort((a, b) => b.date - a.date)
        .map((r) => ({
          ...r,
          subjectTitle:
            catSubjects.find(({ id }) => id === r.subjectId)?.title ||
            "General",
        }));

      expect(renderProperties.records).toStrictEqual(categoryRecords);
    });
  });

  describe("Whene records still exist, and subjects removed", () => {
    let renderProperties;
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      jest.clearAllMocks();
      mockUseEffect(); //useExists
      mockUseEffect(); //setCurrentSubject
      shallow(<CategoryContainer {...props} subjects={[]} />);
      renderProperties = [...props.render.mock.calls].pop()[0];
    });

    it("should call 'render' function with 'enriched records'", () => {
      const catSubjects = [];
      const categoryRecords = props.records
        .filter((r) => r.categoryId === categoryId)
        .sort((a, b) => b.date - a.date)
        .map((r) => ({
          ...r,
          subjectTitle:
            catSubjects.find(({ id }) => id === r.subjectId)?.title ||
            "General",
        }));

      expect(renderProperties.records).toStrictEqual(categoryRecords);
    });
  });

  describe("'AddSubject' function callback", () => {
    const catSubjects = props.subjects.filter(
      (sub) => sub.categoryId === categoryId
    );
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<CategoryContainer {...props} />);
      props.render.mock.calls[0][0].addSubject();
    });

    it("should call 'addSubject' callback with newSubject data", () => {
      expect(props.addSubject.mock.calls[0][0]).toMatchObject({
        ...newSubject,
        position: catSubjects.length + 1,
      });
    });

    it("should create valid id for newSubject", () => {
      const id = props.addSubject.mock.calls[0][0].id;
      expect(shortid.isValid(id)).toBe(true);
    });

    it("should call 'addSubject' callback with proper 'categoryId'", () => {
      expect(props.addSubject.mock.calls[0][0].categoryId).toBe(categoryId);
    });

    it("should call 'showAlert' fn with 'NewSubjectAdded' alert", () => {
      expect(alert.showAlert).toHaveBeenLastCalledWith(Alerts.NewSubjectAdded);
    });
  });
});
