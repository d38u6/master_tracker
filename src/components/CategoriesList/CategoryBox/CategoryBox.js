import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import CategoryBoxWrapper from "./CategoryBoxWrapper/CategoryBoxWrapper";
import EditButton from "./EditButton/EditButton";
import CardWithTheme from "../../Utility/CardWithTheme/CardWithTheme";
import CategoryImage from "./CategoryImage/CategoryImage";

import classes from "./CategoryBox.module.css";

function CategoryBox({ imageSrc, title, desc, time, onEditClick }) {
  return (
    <CategoryBoxWrapper className={classes.CategoryBox}>
      <EditButton className={classes.EditButton} onClick={onEditClick} />
      <CardWithTheme>
        <CategoryImage src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{time}</small>
        </Card.Footer>
      </CardWithTheme>
    </CategoryBoxWrapper>
  );
}

CategoryBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.number,
  onEditClick: PropTypes.func,
};

export default CategoryBox;
