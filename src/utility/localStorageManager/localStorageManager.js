export const CATEGORIES = "CATEGORIES";

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

export function saveStoreSubscriber(store) {
  let prevState = store.getState();
  return () => {
    const state = store.getState();
    if (prevState.categories !== state.categories) {
      saveCategories(state.categories);
    }
    prevState = state;
  };
}
