import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function TimeCounter({ time }) {
  return (
    <Card.Footer>
      <small className="text-muted">{time}</small>
    </Card.Footer>
  );
}

TimeCounter.propTypes = {
  time: PropTypes.number,
};

export default TimeCounter;
