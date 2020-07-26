import { SET_RECORDS, ADD_RECORD, EDIT_RECORD, REMOVE_RECORD } from "../types";

export function setRecords(records) {
  return { type: SET_RECORDS, payload: records };
}

export function addRecord(record) {
  return { type: ADD_RECORD, payload: record };
}

export function editRecord(recordId, data) {
  return { type: EDIT_RECORD, payload: { recordId, data } };
}

export function removeRecord(recordId) {
  return { type: REMOVE_RECORD, payload: recordId };
}
