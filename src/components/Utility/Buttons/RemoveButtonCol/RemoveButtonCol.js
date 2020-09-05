import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import classes from "./RemoveButtonCol.module.css";

function RemoveButtonCol({ onClick }) {
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

RemoveButtonCol.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveButtonCol;
