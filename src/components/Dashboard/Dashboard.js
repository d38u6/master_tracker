import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import GoalChartContainer from "../../containers/GoalChart/GoalChartContainer";
import Widget from "../Utility/Widget/Widget";
import CircleProgressBar from "../Utility/CircleProgressBar/CircleProgressBar";

function Dashboard({ records }) {
  return (
    <Row>
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
    </Row>
  );
}

Dashboard.propTypes = {
  records: PropTypes.array.isRequired,
};

export default Dashboard;
