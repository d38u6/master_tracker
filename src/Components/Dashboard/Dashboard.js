import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";

import GoalChartContainer from "Containers/Category/Charts/GoalChart/GoalChartContainer";
import TimeChartContainer from "Containers/Category/Charts/TimeChart/TimeChartContainer";

import Widget from "Components/Utility/Widget/Widget";
import CircleProgressBar from "Components/Utility/CircleProgressBar/CircleProgressBar";
import TimeChart from "Components/Utility/TimeChart/TimeChart";

function Dashboard({ records }) {
  return (
    <Row className={classes.Dashboard}>
      <GoalChartContainer
        records={records}
        render={({ name, menuItems, selectItem, progressBarConf }) => (
          <Widget md="6" name={name}>
            <Widget.ContextMenu
              id={"GoalChartContextMenu"}
              items={menuItems}
              onSelect={selectItem}
            />
            <CircleProgressBar {...progressBarConf} />
          </Widget>
        )}
      />

      <TimeChartContainer
        records={records}
        render={({ name, menuItems, selectItem, data }) => (
          <Widget md="6" name={name}>
            <Widget.ContextMenu
              id={"TimeChartContextMenu"}
              items={menuItems}
              onSelect={selectItem}
            />
            <TimeChart data={data} />
          </Widget>
        )}
      />
    </Row>
  );
}

Dashboard.propTypes = {
  records: PropTypes.array.isRequired,
};

export default Dashboard;
