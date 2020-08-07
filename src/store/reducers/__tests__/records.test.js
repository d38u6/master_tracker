import reducer from "../records/records";
import * as actions from "../../actions/records/records";
import { records } from "../../../data/fixtures";
const record = records[0],
  recordTwo = records[1];

describe("records reducer", () => {
  it("should return default state with unknown action", () => {
    expect(reducer(records, { type: "unknown" })).toBe(records);
  });

  it("should set records to state", () => {
    const state = reducer(undefined, actions.setRecords(records));
    expect(state).toBe(records);
  });

  it("should add new record to state", () => {
    const newRecord = { ...record, id: "newId" };
    const state = reducer(records, actions.addRecord(newRecord));
    expect([...state].pop()).toBe(newRecord);
  });

  it("should edit record in state", () => {
    const state = reducer(records, actions.editRecord(record.id, recordTwo));
    const editedRecord = state.find(({ id }) => id === record.id);

    expect(editedRecord).toStrictEqual({
      ...record,
      ...recordTwo,
      id: record.id,
    });
  });

  it("should remove record from state", () => {
    const state = reducer(records, actions.removeRecord(recordTwo.id));

    expect(state).toStrictEqual(
      records.filter(({ id }) => id !== recordTwo.id)
    );
  });
});
