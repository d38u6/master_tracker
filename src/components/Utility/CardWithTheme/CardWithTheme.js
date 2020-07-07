import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import withTheme from "../../../HOC/withTheme";

function CardWithTheme({ theme, children }) {
  return (
    <Card bg={theme.bg} text={theme.text}>
      {children}
    </Card>
  );
}

CardWithTheme.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};

export default withTheme(CardWithTheme);
