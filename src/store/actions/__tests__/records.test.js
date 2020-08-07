import * as actions from "../records/records";
import { SET_RECORDS, ADD_RECORD, EDIT_RECORD, REMOVE_RECORD } from "../types";
import { records } from "../../../data/fixtures";
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

    it("action should contain correctly type `ADD_RECORD`", () => {
      expect(action.type).toEqual(REMOVE_RECORD);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(record.id);
    });
  });
});
