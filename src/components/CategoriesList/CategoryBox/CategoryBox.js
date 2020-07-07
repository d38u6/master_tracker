import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";

import withTheme from "../../../HOC/withTheme";
import EditButton from "../../Utility/EditButton/EditButton";

import classes from "./CategoryBox.module.css";

function CategoryBox({ imageSrc, title, desc, time, onEditClick, theme }) {
  return (
    <Col md="4">
      <div className={classes.CategoryBox}>
        <div className={classes.EditButton}>
          <EditButton onClick={onEditClick} />
        </div>
        <Card bg={theme.bg} text={theme.text}>
          <Card.Img
            variant="top"
            src={imageSrc}
            style={{ height: "160px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{time}</small>
          </Card.Footer>
        </Card>
      </div>
    </Col>
  );
}

CategoryBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.number,
  onEditClick: PropTypes.func,
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }),
};

export default withTheme(CategoryBox);
