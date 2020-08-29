import React from "react";
import { shallow } from "enzyme";

import AlertEraseDataConfirm from "../AlertEraseDataConfirm";

const props = { onClose: jest.fn(), onRemove: jest.fn() };

describe("'AlertEraseDataConfirm' component", () => {
  const wrapper = shallow(<AlertEraseDataConfirm {...props} />);

  it("render 'ConfirmModal' component", () => {
    expect(wrapper.find("ConfirmModal").exists()).toBe(true);
  });

  it("'ConfirmModal' component should contain propre 'title' and 'body' props", () => {
    const desiredProps = {
      title: "Erase Data",
      body:
        "All yours data like subjects, records and settings will be permanently removed. Are you sure?",
    };
    expect(wrapper.find("ConfirmModal").props()).toMatchObject(desiredProps);
  });

  it("'ConfirmModal' component should contain propre 'options' prop", () => {
    expect(wrapper.find("ConfirmModal").prop("options")).toMatchObject([
      { caption: "Close", variant: "secondary", onClick: props.onClose },
      {
        caption: "Remove",
        variant: "danger",
      },
    ]);
  });

  describe("when call 'onClick' fn belong to 'Remove' option", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper.find("ConfirmModal").prop("options")[1].onClick();
    });

    it("should call 'onClose' callback", () => {
      expect(props.onClose).toHaveBeenCalled();
    });

    it("should call 'onRemove' callback", () => {
      expect(props.onRemove).toHaveBeenCalled();
    });
  });
});
