import React from "react";
import { shallow } from "enzyme";

import AlertSubjectRemoveConfirm from "Components/Alerts/AlertSubjectRemoveConfirm";

const props = {
  onClose: jest.fn(),
  onRemove: jest.fn(),
  onRemoveWithoutRecords: jest.fn(),
};

describe("'AlertSubjectRemoveConfirm' component", () => {
  const wrapper = shallow(<AlertSubjectRemoveConfirm {...props} />);

  it("render 'ConfirmModal' component", () => {
    expect(wrapper.find("ConfirmModal").exists()).toBe(true);
  });

  it("'ConfirmModal' component should contain propre 'title' and 'body' props", () => {
    const desiredProps = {
      title: "Remove Subject",
      body:
        "Removing subject it is not reversible, also you can removed subject and not removing records then records move to 'General' subject",
    };
    expect(wrapper.find("ConfirmModal").props()).toMatchObject(desiredProps);
  });

  it("'ConfirmModal' component should contain propre 'options' prop", () => {
    expect(wrapper.find("ConfirmModal").prop("options")).toMatchObject([
      { caption: "Close", variant: "secondary", onClick: props.onClose },
      {
        caption: "Remove but save records",
        variant: "danger",
      },
      {
        caption: "Remove",
        variant: "danger",
      },
    ]);
  });

  describe("when call 'onClick' fn belong to 'Remove but save records' option", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper.find("ConfirmModal").prop("options")[1].onClick();
    });

    it("should call 'onClose' callback", () => {
      expect(props.onClose).toHaveBeenCalled();
    });

    it("should call 'onRemove' callback", () => {
      expect(props.onRemoveWithoutRecords).toHaveBeenCalled();
    });
  });

  describe("when call 'onClick' fn belong to 'Remove' option", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper.find("ConfirmModal").prop("options")[2].onClick();
    });

    it("should call 'onClose' callback", () => {
      expect(props.onClose).toHaveBeenCalled();
    });

    it("should call 'onRemove' callback", () => {
      expect(props.onRemove).toHaveBeenCalled();
    });
  });
});
