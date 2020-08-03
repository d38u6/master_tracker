import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import classes from "./RemoveButton.module.css";

function RemoveButton({ onClick }) {
  return (
    <td>
      <Button
        variant="danger"
        size="sm"
        className={classes.RemoveButton}
        onClick={onClick}
      >
        Remove <FaTrash className={classes.Icon} />
      </Button>
    </td>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveButton;
