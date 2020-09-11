import React from "react";
import { shallow } from "enzyme";

import Category from "Routes/Category";
import { subjectsWithSummaryTime, records } from "Data/fixtures";
import Dashboard from "Components/Dashboard/Dashboard";
import SubjectsAndRecordsListTabs from "Components/SubjectsAndRecordsListTabs/SubjectsAndRecordsListTabs";

const addSubject = jest.fn();

describe("'Category' component", () => {
  const category = shallow(<Category />);

  //CategoryContainer
  it("render 'CategoryContainer'", () => {
    expect(
      category.find("withRouter(Connect(CategoryContainer))").exists()
    ).toBe(true);
  });

  describe("render prop inside 'CategoryContainer'", () => {
    let wrapper;
    beforeEach(() => {
      const renderProp = category
        .find("withRouter(Connect(CategoryContainer))")
        .prop("render");
      wrapper = renderProp({
        subjects: subjectsWithSummaryTime,
        records,
        addSubject,
      });
    });

    it("render 'Dashboard' with 'records' prop", () => {
      expect(wrapper.props.children[0]).toStrictEqual(
        <Dashboard records={records} />
      );
    });

    //SubjectsAndRecordsListTabs
    it("render 'SubjectsAndRecordsListTabs' with proper props", () => {
      expect(wrapper.props.children[1]).toStrictEqual(
        <SubjectsAndRecordsListTabs
          subjects={subjectsWithSummaryTime}
          addSubject={addSubject}
          records={records}
        />
      );
    });
  });
});
