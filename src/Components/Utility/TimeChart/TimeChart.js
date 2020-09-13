import React, { useRef, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { axisBottom, axisLeft } from "d3-axis";
import { scaleUtc, scaleLinear } from "d3-scale";
import { extent, max } from "d3-array";
import { select } from "d3-selection";
import { line, curveStep } from "d3-shape";

function TimeChart({
  data,
  style: { margin, width, height, lineWidth, color },
}) {
  const svgRef = useRef(null);

  const timeScale = useMemo(
    () =>
      scaleUtc()
        .domain(extent(data, (d) => d.time))
        .range([margin, width]),
    [data, margin, width]
  );

  const valueScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, max(data, (d) => d.value)])
        .range([height - margin, margin]),
    [data, margin, height]
  );

  const lineFn = useMemo(
    () =>
      line()
        .curve(curveStep)
        .x(({ time }) => timeScale(time))
        .y(({ value }) => valueScale(value)),
    [timeScale, valueScale]
  );

  const drawYAxis = useCallback(
    (svg, scaleFn) =>
      svg
        .append("g")
        .attr("transform", `translate(${margin},0)`)
        .call(axisLeft(scaleFn))
        .select(".domain")
        .remove(),
    [margin]
  );

  const drawXAxis = useCallback(
    (svg, scaleFn) =>
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin})`)
        .call(axisBottom(scaleFn).ticks(7).tickSizeOuter(0)),
    [height, margin]
  );

  const drawLine = useCallback(
    (svg) =>
      svg
        .append("path")
        .attr("d", lineFn(data))
        .attr("stroke", color)
        .attr("stroke-width", lineWidth)
        .attr("fill", "none"),
    [data, lineFn, color, lineWidth]
  );

  const clearSvg = (svg) => svg.selectAll("*").remove();

  useEffect(() => {
    if (svgRef && svgRef.current) {
      const svgContainer = select(svgRef.current);
      clearSvg(svgContainer);

      drawXAxis(svgContainer, timeScale);
      drawYAxis(svgContainer, valueScale);
      drawLine(svgContainer);
    }
  }, [svgRef, timeScale, valueScale, drawXAxis, drawYAxis, drawLine]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
}

TimeChart.defaultProps = {
  style: {
    width: 486,
    height: 290,
    margin: 25,
    lineWidth: 1.44,
    color: "#28a745",
  },
};

TimeChart.propTypes = {
  style: PropTypes.exact({
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number,
    lineWidth: PropTypes.number,
    color: PropTypes.string,
  }),
  date: PropTypes.arrayOf(
    PropTypes.exact({
      time: PropTypes.number.isRequired, //unixtime
      value: PropTypes.number.isRequired,
    })
  ),
};

export default TimeChart;
