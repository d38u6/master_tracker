import React, { useEffect, useRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { arc } from "d3-shape";
import { select } from "d3-selection";

import { parseMinutes } from "Utility/time";

import classes from "./DonutProgressBar.module.css";

function DonutProgressBar({
  data: { value, goal, diff = 0 },
  style: { width, height, margin },
}) {
  const svgRef = useRef(null);
  const animationRef = useRef(null);

  const percent = useMemo(
    () => Math.min((((value - diff) / (goal - diff)) * 100).toFixed(1), 100),
    [value, goal, diff]
  );

  const clearSvg = (svg) => svg.selectAll("*").remove();

  const arcFn = useMemo(() => {
    const fullAngle = 2 * Math.PI;
    const shiftAngle = fullAngle * 0.625;
    const maxAngle = fullAngle - fullAngle * 0.25;

    return (percentLength = 1) => {
      if (isNaN(percentLength)) percentLength = 1;

      return arc().cornerRadius(100)({
        innerRadius: 115,
        outerRadius: Math.min(width, height) / 2 - margin,
        startAngle: shiftAngle,
        endAngle:
          maxAngle * (Math.min(Math.max(percentLength, 4), 100) / 100) +
          shiftAngle,
      });
    };
  }, [width, height, margin]);

  const drawArc = useCallback(
    (svg, { percentLength, color }) =>
      svg
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .append("path")
        .attr("d", arcFn(percentLength))
        .attr("fill", color || "#000"),
    [height, width, arcFn]
  );

  const drawProgressBar = useCallback(
    (svg, currentPercent = 0) => {
      clearSvg(svg);
      drawArc(svg, { percentLength: 100, color: "#d3d9df" });
      drawArc(svg, { percentLength: currentPercent, color: "#28a745" });
    },
    [drawArc]
  );

  const animationProgressBar = useCallback(
    (currentPercent) => {
      if (svgRef && svgRef.current) {
        const svgContainer = select(svgRef.current);
        drawProgressBar(svgContainer, currentPercent);

        if (currentPercent < percent) {
          animationRef.current = requestAnimationFrame(() =>
            animationProgressBar(currentPercent + 1)
          );
        }
      }
    },
    [drawProgressBar, percent]
  );

  useEffect(() => {
    animationRef.current = requestAnimationFrame(() => animationProgressBar(0));
    return () => cancelAnimationFrame(animationRef.current);
  }, [animationProgressBar]);
  return (
    <>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      <span className={classes.Percent}>{`${percent}%`}</span>
      <span className={classes.Value}>{parseMinutes(value)}</span>
      <span className={classes.Goal}>{parseMinutes(goal)}</span>
    </>
  );
}

DonutProgressBar.defaultProps = {
  style: {
    width: 486,
    height: 290,
    margin: 5,
    //   lineWidth: 1.44,
    //   color: "#28a745",
  },
};

DonutProgressBar.propTypes = {
  style: PropTypes.exact({
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number,
    // lineWidth: PropTypes.number,
    // color: PropTypes.string,
  }),
  date: PropTypes.shape({
    value: PropTypes.number.isRequired, //unixtime
    goal: PropTypes.number.isRequired,
    diff: PropTypes.number,
  }),
};

export default DonutProgressBar;
