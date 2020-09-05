import React from "react";
import PropTypes from "prop-types";
import { Chart } from "react-charts";

import withTheme from "../../../../HOC/withTheme";

export function ChartWithTheme({ theme, ...props }) {
  return <Chart dark={theme.bg === "dark"} {...props} />;
}

ChartWithTheme.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};

export default withTheme(ChartWithTheme);
