import React from "react";
import { mount } from "enzyme";

import ErrorBoundary from "Components/Utility/ErrorBoundary/ErrorBoundary";

function ErrorCmp({ error }) {
  return error.message;
}

describe("ErrorBoundary component", () => {
  const Child = () => {
    return null;
  };

  const errorBoundary = mount(
    <ErrorBoundary errorCmp={ErrorCmp}>
      <Child />
    </ErrorBoundary>
  );

  it("when not received error should renders child cmp", () => {
    expect(errorBoundary.find("Child").exists()).toBe(true);
  });

  describe("when received error", () => {
    const errorMsg = "Test ERROR";
    let errorBoundary;
    beforeEach(() => {
      errorBoundary = mount(
        <ErrorBoundary errorCmp={ErrorCmp}>
          <Child />
        </ErrorBoundary>
      );
      errorBoundary.find("Child").simulateError(new Error(errorMsg));
    });

    it("should render 'ErrorCmp' component", () => {
      expect(errorBoundary.find("ErrorCmp").exists()).toBe(true);
    });

    it("should render error message", () => {
      expect(errorBoundary.find("ErrorCmp").text()).toBe(errorMsg);
    });
  });
});
