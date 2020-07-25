import reducer from "../subjects/subjects";
import * as actions from "../../actions/subjects/subjects";

import { subjects, subOne } from "../../../data/fixtures";

describe("subjects reducer", () => {
  it("should return default state with unknown action", () => {
    expect(reducer(subjects, { type: "unknown" })).toBe(subjects);
  });

  it("should set subjects to state", () => {
    const state = reducer(undefined, actions.setSubjects(subjects));
    expect(state).toBe(subjects);
  });

  it("should add new subject to state", () => {
    const newSubject = { ...subOne, id: "newId" };
    const state = reducer(subjects, actions.addSubject(newSubject));
    expect([...state].pop()).toBe(newSubject);
  });

  it("should edit subject in state", () => {
    const subjectId = subjects[0].id;
    const data = { title: "Edit Title" };
    const state = reducer(subjects, actions.editSubject(subjectId, data));
    const editedSubject = state.find(({ id }) => id === subjectId);

    expect(editedSubject).toStrictEqual({ ...subjects[0], ...data });
  });

  it("should remove subject from state", () => {
    const subjectId = subjects[1].id;
    const state = reducer(subjects, actions.removeSubject(subjectId));

    expect(state).toStrictEqual(subjects.filter(({ id }) => id !== subjectId));
  });
});
