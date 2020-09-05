import React from "react";
import { shallow } from "enzyme";

import RecordsList from "../../RecordsList/RecordsList";
import { records } from "../../../../data/fixtures";

const props = {
  records: records.map((r) => ({ ...r, subjectTitle: r.subjectId })),
};

describe("'RecordsList' component", () => {
  const recordsList = shallow(<RecordsList {...props} />);

  //TableStriped
  it("render 'TableStriped' component", () => {
    expect(recordsList.find("TableStriped").exists()).toBe(true);
  });

  //RecordContainer
  it("render correctly number of 'RecordContainer' components", () => {
    expect(recordsList.find("Connect(RecordContainer)").length).toBe(
      Math.min(30, props.records.length)
    );
  });

  it("render 'NoRecordsYet' component when records is empty array", () => {
    const recordsList = shallow(<RecordsList records={[]} />);
    expect(recordsList.find("NoRecordsYet").exists()).toBe(true);
  });

  recordsList.find("Connect(RecordContainer)").forEach((recordContainer, i) => {
    it(`'recordContainer' ${i} should contain proper id prop`, () => {
      expect(recordContainer.prop("id")).toBe(props.records[i].id);
    });
    //RecordRow inside RecordContainer render prop
    const removeRecord = jest.fn();
    const recordRow = recordContainer.prop("render")({ removeRecord });
    it(`should correctly pass record props to recordRow coponents for record ${i}`, () => {
      const desiredProps = { ...props.records[i], removeRecord };
      expect(desiredProps).toMatchObject(recordRow.props);
    });
  });

  describe("when exists more records", () => {
    //RowButton
    it("render a 'RowButton' component", () => {
      expect(recordsList.find("RowButton").exists()).toBe(true);
    });

    it("'RowButton' component should contain 'Load More' text", () => {
      expect(recordsList.find("RowButton > span").text()).toBe("Load More");
    });

    describe("when click load more", () => {
      let recordsCount = 30;
      beforeEach(() => {
        recordsList.find("RowButton").simulate("click");
        recordsCount += recordsCount;
      });

      it("render correctly number of 'RecordContainer' components", () => {
        expect(recordsList.find("Connect(RecordContainer)").length).toBe(
          Math.min(recordsCount, records.length)
        );
      });
    });
  });

  describe("when not exists more records", () => {
    const records = props.records.slice(0, 25);
    const recordsList = shallow(<RecordsList records={records} />);

    it("render correctly number of 'RecordContainer' components", () => {
      expect(recordsList.find("Connect(RecordContainer)").length).toBe(
        Math.min(30, records.length)
      );
    });

    //RowButton
    it("should not render a 'RowButton' component", () => {
      expect(recordsList.find("RowButton").exists()).toBe(false);
    });
  });
});
