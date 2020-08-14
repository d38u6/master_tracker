import * as actions from "../records/records";
import {
  SET_RECORDS,
  ADD_RECORD,
  EDIT_RECORD,
  REMOVE_RECORD,
  REMOVE_RECORDS_FOR_CATEGORY,
  REMOVE_RECORDS_FOR_SUBJECT,
} from "../types";
import { records, categoryOne, subOne } from "../../../data/fixtures";
const record = records[0];
const recordTwo = records[1];

describe("reocrds actions", () => {
  describe("creates an action to set records", () => {
    let action;
    beforeEach(() => {
      action = actions.setRecords(records);
    });

    it("action should contain correctly type `SET_RECORDS`", () => {
      expect(action.type).toEqual(SET_RECORDS);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(records);
    });
  });

  describe("creates an action to add record", () => {
    let action;
    beforeEach(() => {
      action = actions.addRecord(record);
    });

    it("action should contain correctly type `ADD_RECORD`", () => {
      expect(action.type).toEqual(ADD_RECORD);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(record);
    });
  });

  describe("creates an action to edit record", () => {
    let action;
    beforeEach(() => {
      action = actions.editRecord(record.id, recordTwo);
    });

    it("action should contain correctly type `EDIT_RECORD`", () => {
      expect(action.type).toEqual(EDIT_RECORD);
    });

    it("action should contain proper payload recordId propertie", () => {
      expect(action.payload.recordId).toBe(record.id);
    });

    it("action should contain proper payload data propertie", () => {
      expect(action.payload.data).toEqual(recordTwo);
    });
  });

  describe("creates an action to remove record", () => {
    let action;
    beforeEach(() => {
      action = actions.removeRecord(record.id);
    });

    it("action should contain correctly type `REMOVE_RECORD`", () => {
      expect(action.type).toEqual(REMOVE_RECORD);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(record.id);
    });
  });

  describe("creates an action to remove records for category", () => {
    let action;
    beforeEach(() => {
      action = actions.removeRecordsForCategory(categoryOne.id);
    });

    it("action should contain correctly type `REMOVE_RECORDS_FOR_CATEGORY`", () => {
      expect(action.type).toEqual(REMOVE_RECORDS_FOR_CATEGORY);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(categoryOne.id);
    });
  });

  describe("creates an action to remove records for subject", () => {
    let action;
    beforeEach(() => {
      action = actions.removeRecordsForSubject(subOne.id);
    });

    it("action should contain correctly type `REMOVE_RECORDS_FOR_SUBJECT`", () => {
      expect(action.type).toEqual(REMOVE_RECORDS_FOR_SUBJECT);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(subOne.id);
    });
  });
});
