import reducer from "Store/reducers/subjects/subjects";
import * as actions from "Store/actions/subjects/subjects";

import { subjects, subOne, categoryOne } from "Data/fixtures";

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

  it("should delete 'editMode' prop from subjct", () => {
    const subjectId = subjects[0].id;
    subjects[0].editMode = true;
    const state = reducer(subjects, actions.editSubject(subjectId));
    const editedSubject = state.find(({ id }) => id === subjectId);
    delete subjects[0]["editMode"];
    expect(editedSubject).toStrictEqual({ ...subjects[0] });
  });

  it("should remove subject from state", () => {
    const subjectId = subjects[1].id;
    const state = reducer(subjects, actions.removeSubject(subjectId));

    expect(state).toStrictEqual(subjects.filter(({ id }) => id !== subjectId));
  });

  it("should remove subjects for category from state", () => {
    const catId = categoryOne.id;
    const state = reducer(subjects, actions.removeSubjectsForCategory(catId));

    expect(state).toStrictEqual(
      subjects.filter(({ categoryId }) => categoryId !== catId)
    );
  });
});
