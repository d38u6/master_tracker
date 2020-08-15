import React from "react";
import PropTypes from "prop-types";
import classes from "./Alert.module.css";

function Alert({
  variant = "primary",
  onClose,
  withoutTimeout = false,
  timeoutTime = 2500,
  children,
}) {
  const variantClass = classes[variant[0].toUpperCase() + variant.slice(1)];

  React.useEffect(() => {
    if (withoutTimeout) return;
    const timeout = setTimeout(onClose, timeoutTime);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={[classes.Alert, variantClass].join(" ")}>
      <div className={classes.CloseBtn} onClick={onClose}>
        x
      </div>
      {children}
    </div>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "danger", "warning"]),
  onClose: PropTypes.func,
  withoutTimeout: PropTypes.bool,
  timeoutTime: PropTypes.number,
};

export default Alert;
