import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";

import GoalChartContainer from "../../containers/Category/Charts/GoalChart/GoalChartContainer";
import TimeChartContainer from "../../containers/Category/Charts/TimeChart/TimeChartContainer";
import Widget from "../Utility/Widget/Widget";
import ChartWrapper from "./ChartWrapper/ChartWrapper";
import ChartWithTheme from "../Utility/WithTheme/ChartWithTheme/ChartWithTheme";
import CircleProgressBar from "../Utility/CircleProgressBar/CircleProgressBar";

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
        render={({ name, menuItems, selectItem, chartConf }) => (
          <Widget md="6" name={name}>
            <Widget.ContextMenu
              id={"TimeChartContextMenu"}
              items={menuItems}
              onSelect={selectItem}
            />
            <ChartWrapper>
              <ChartWithTheme {...chartConf} />
            </ChartWrapper>
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
