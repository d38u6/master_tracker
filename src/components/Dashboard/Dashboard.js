import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";

import GoalChartContainer from "../../containers/GoalChart/GoalChartContainer";
import Widget from "../Utility/Widget/Widget";
import CircleProgressBar from "../Utility/CircleProgressBar/CircleProgressBar";
import ChartWithTheme from "../Utility/ChartWithTheme/ChartWithTheme";
import TimeChartContainer from "../../containers/TimeChart/TimeChartContainer";
import ChartWrapper from "../ChartWrapper/ChartWrapper";

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
            ></Widget.ContextMenu>
            <CircleProgressBar {...progressBarConf} />
          </Widget>
        )}
      />

      <TimeChartContainer
        records={records}
        render={({ chartConf }) => (
          <Widget md="6" name="Last 7 days">
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
