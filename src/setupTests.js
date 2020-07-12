// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

///MOCK LOCAL STORAGE

class localStorageMock {
  constructor() {
    this.store = {};
  }

  getItem = jest.fn((key) => this.store[key] || null);

  setItem = jest.fn((key, value) => (this.store[key] = value));
}

Object.defineProperty(window, "localStorage", {
  value: new localStorageMock(),
});
