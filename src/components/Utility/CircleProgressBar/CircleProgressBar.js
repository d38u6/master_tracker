import React, { useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./CircleProgressBar.module.css";
import useCanvas from "./useCanvas";
import { parseMinutes } from "../../../utility/time";

function CircleProgressBar({ value, goalValue, diff = 0 }) {
  const { canvasRef, draw } = useCanvas();
  let percent = (((value - diff) / (goalValue - diff)) * 100).toFixed(1);
  if (percent > 100) percent = 100;

  useEffect(() => {
    let animationFrame;
    draw(() => (ctx) => {
      const { width, height } = ctx.canvas;
      //coordinates
      const x = Math.round(width / 2);
      const y = Math.round(height / 2);
      const r = y - 10;

      //contex style
      ctx.lineCap = "round";
      ctx.lineWidth = 17;

      const drawEmptyCircle = () => {
        ctx.strokeStyle = "#d3d9df";
        ctx.beginPath();
        ctx.arc(x, y, r, 0.75 * Math.PI, 2.25 * Math.PI);
        ctx.stroke();
      };

      const drawProgress = (position) => {
        ctx.strokeStyle = "#28a745";
        ctx.beginPath();
        ctx.arc(x, y, r, 0.75 * Math.PI, (0.75 + position) * Math.PI);
        ctx.stroke();
      };

      const draw = (position) => {
        ctx.clearRect(0, 0, width, height);
        drawEmptyCircle();
        position += 0.012;
        drawProgress(position);

        if ((percent / 100) * 1.5 > position) {
          animationFrame = window.requestAnimationFrame(() => draw(position));
        }
      };
      animationFrame = window.requestAnimationFrame(() => draw(0));
    });
    return () => window.cancelAnimationFrame(animationFrame);
  }, [draw, percent]);

  return (
    <>
      <canvas ref={canvasRef} />
      <span className={classes.Percent}>{`${percent}%`}</span>
      <span className={classes.Value}>{parseMinutes(value)}</span>
      <span className={classes.GoalValue}>{parseMinutes(goalValue)}</span>
    </>
  );
}

CircleProgressBar.propTypes = {
  goalValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  diff: PropTypes.number,
};

export default CircleProgressBar;
