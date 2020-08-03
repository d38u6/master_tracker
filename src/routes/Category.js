import React from "react";
import CategoryContainer from "../containers/Category/CategoryContainer";
import GoalChartContainer from "../containers/GoalChart/GoalChartContainer";
import Widget from "../components/Utility/Widget/Widget";
import CircleProgressBar from "../components/GoalChart/CircleProgressBar/CircleProgressBar";
import SubjectsList from "../components/Category/SubjectsList/SubjectsList";

function Category() {
  return (
    <CategoryContainer
      render={({ subjects, records, addSubject }) => (
        <>
          <GoalChartContainer
            records={records}
            render={({ name, menuItems, selectItem, progressBarConf }) => (
              <Widget md="6" lg="4" name={name}>
                <Widget.ContextMenu
                  id={"GoalChartContextMenu"}
                  items={menuItems}
                  onSelect={selectItem}
                ></Widget.ContextMenu>
                <CircleProgressBar {...progressBarConf} />
              </Widget>
            )}
          />
          <SubjectsList subjects={subjects} onAddClick={addSubject} />
        </>
      )}
    />
  );
}

export default Category;
