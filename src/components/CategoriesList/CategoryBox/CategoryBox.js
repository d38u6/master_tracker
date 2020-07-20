import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import CategoryBoxWrapper from "./CategoryBoxWrapper/CategoryBoxWrapper";
import EditButton from "./EditButton/EditButton";
import CardWithTheme from "../../Utility/CardWithTheme/CardWithTheme";
import CategoryImage from "./CategoryImage/CategoryImage";
import TimeCounter from "./TimeCounter/TimeCounter";

import classes from "./CategoryBox.module.css";
import { Link } from "react-router-dom";

function CategoryBox({ id, imageSrc, title, desc, time, onPick, onEditClick }) {
  return (
    <CategoryBoxWrapper className={classes.CategoryBox}>
      <EditButton className={classes.EditButton} onClick={onEditClick} />
      <CardWithTheme>
        <CategoryImage src={imageSrc} />
        <Link to={`/category/${title}/${id}`} onClick={onPick}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Link>
        <TimeCounter time={time} />
      </CardWithTheme>
    </CategoryBoxWrapper>
  );
}

CategoryBox.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.number,
  onPick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
};

export default CategoryBox;
