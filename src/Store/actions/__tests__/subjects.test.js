import * as actions from "Store/actions/subjects/subjects";
import {
  SET_SUBJECTS,
  ADD_SUBJECT,
  EDIT_SUBJECT,
  REMOVE_SUBJECT,
  REMOVE_SUBJECTS_FOR_CATEGORY,
} from "Store/actions/types";

import { subjects, subOne, subTwo, categoryOne } from "Data/fixtures";

describe("subjects actions", () => {
  describe("creates an action to set subjects", () => {
    let action;
    beforeEach(() => {
      action = actions.setSubjects(subjects);
    });

    it("action should contain correctly type `SET_SUBJECTS`", () => {
      expect(action.type).toEqual(SET_SUBJECTS);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(subjects);
    });
  });

  describe("creates an action to add subject", () => {
    let action;
    beforeEach(() => {
      action = actions.addSubject(subOne);
    });

    it("action should contain correctly type `ADD_SUBJECT`", () => {
      expect(action.type).toEqual(ADD_SUBJECT);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(subOne);
    });
  });

  describe("creates an action to edit subject", () => {
    let action;
    beforeEach(() => {
      action = actions.editSubject(subOne.id, subTwo);
    });

    it("action should contain correctly type `EDIT_SUBJECT`", () => {
      expect(action.type).toEqual(EDIT_SUBJECT);
    });

    it("action should contain proper payload subjectId propertie", () => {
      expect(action.payload.subjectId).toBe(subOne.id);
    });

    it("action should contain proper payload data propertie", () => {
      expect(action.payload.data).toEqual(subTwo);
    });
  });

  describe("creates an action to remove subject", () => {
    let action;
    beforeEach(() => {
      action = actions.removeSubject(subOne.id);
    });

    it("action should contain correctly type `REMOVE_SUBJECT`", () => {
      expect(action.type).toEqual(REMOVE_SUBJECT);
    });

    it("action should contain proper payload propertie", () => {
      expect(action.payload).toBe(subOne.id);
    });
  });

  describe("creates an action to remove subject for category", () => {
    let action;
    beforeEach(() => {
      action = actions.removeSubjectsForCategory(categoryOne.id);
    });

    it("action should contain correctly type `REMOVE_SUBJECT`", () => {
      expect(action.type).toEqual(REMOVE_SUBJECTS_FOR_CATEGORY);
    });

    it("action should contain proper payload propertie", () => {
      expect(action.payload).toBe(categoryOne.id);
    });
  });
});
