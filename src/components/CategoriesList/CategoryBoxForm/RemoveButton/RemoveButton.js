import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import Button from "../../../Utility/RemoveButton/RemoveButton";

function RemoveButton({ onClick }) {
  return (
    <Card.Footer>
      <Button onClick={onClick} />
    </Card.Footer>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
