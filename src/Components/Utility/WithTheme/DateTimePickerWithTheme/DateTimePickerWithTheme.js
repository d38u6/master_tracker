import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DateTimePicker from "react-datetime-picker";
import { FaCalendarAlt } from "react-icons/fa";

import withTheme from "HOC/withTheme";

import classes from "./DateTimePickerWithTheme.module.css";

export function DateTimePickerWithTheme({ theme, ...props }) {
  const themeClassName = theme.bg.charAt(0).toUpperCase() + theme.bg.slice(1);
  return (
    <DateTimePicker
      {...props}
      className={classNames(
        props.className,
        classes.Wrapper,
        classes[themeClassName]
      )}
      calendarClassName={classNames(
        classes.Calendar,
        classes[themeClassName],
        classes.Shadow
      )}
      calendarIcon={<FaCalendarAlt />}
    />
  );
}

DateTimePickerWithTheme.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};

export default withTheme(DateTimePickerWithTheme);
