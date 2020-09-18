import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./Alert.module.css";

function Alert({ variant = "primary", onClose, timeoutTime = 2500, children }) {
  const variantClass = classes[variant[0].toUpperCase() + variant.slice(1)];

  React.useEffect(() => {
    const timeout = setTimeout(onClose, timeoutTime);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classNames(classes.Alert, variantClass)}>
      <span className={classes.Icon}></span>
      <div className={classes.Content}>{children}</div>
    </div>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "danger", "warning"]),
  onClose: PropTypes.func,
  timeoutTime: PropTypes.number,
};

export default Alert;
