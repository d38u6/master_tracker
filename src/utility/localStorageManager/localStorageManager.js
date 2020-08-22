export const CATEGORIES = "CATEGORIES";
export const SUBJECTS = "SUBJECTS";
export const RECORDS = "RECORDS";

export function getItem(key) {
  try {
    const serialaizedValue = localStorage.getItem(key);
    if (serialaizedValue === null) return undefined;

    return JSON.parse(serialaizedValue);
  } catch (err) {
    return undefined;
  }
}

export function setItem(key, value) {
  try {
    const serialaizedValue = JSON.stringify(value);
    localStorage.setItem(key, serialaizedValue);
  } catch (err) {
    console.error(
      "Failed save item in to local storage",
      "key: ",
      key,
      "item: ",
      value
    );
  }
}

export const getCategories = () => getItem(CATEGORIES);
export const saveCategories = (categories) => setItem(CATEGORIES, categories);
export const getSubjects = () => getItem(SUBJECTS);
export const saveSubjects = (subjects) => setItem(SUBJECTS, subjects);
export const getRecords = () => getItem(RECORDS);
export const saveRecords = (records) => setItem(RECORDS, records);

export function saveStoreSubscriber(store) {
  let prevState = store.getState();

  return () => {
    const state = store.getState();

    if (prevState.categories !== state.categories) {
      saveCategories(state.categories);
    }
    if (prevState.subjects !== state.subjects) {
      saveSubjects(state.subjects);
    }
    if (prevState.records !== state.records) {
      saveRecords(state.records);
    }

    prevState = state;
  };
}
