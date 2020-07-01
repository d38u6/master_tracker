import React from "react";
import PropTypes from "prop-types";

import { Col, Card } from "react-bootstrap";

import defaultImage from "../../assets/image/defaultImage.jpg";
import withTheme from "../../HOC/withTheme";

const Subject = ({ imageURL, title, desc, lastUpdate, theme }) => (
  <>
    <Col md="4">
      <Card bg={theme.bg} text={theme.text}>
        <Card.Img
          variant="top"
          src={imageURL || defaultImage}
          style={{ height: "160px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{lastUpdate}</small>
        </Card.Footer>
      </Card>
    </Col>
  </>
);

Subject.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastUpdate: PropTypes.number, //UNIX TIME STAMP
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }),
};

export default withTheme(Subject);
