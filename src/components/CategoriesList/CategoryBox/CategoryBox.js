import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import CategoryBoxWrapper from "./CategoryBoxWrapper/CategoryBoxWrapper";
import EditButton from "./EditButton/EditButton";
import CardWithTheme from "../../Utility/CardWithTheme/CardWithTheme";
import CategoryImage from "./CategoryImage/CategoryImage";
import TimeCounter from "./TimeCounter/TimeCounter";

import classes from "./CategoryBox.module.css";

export function CategoryBox({
  id,
  imageSrc,
  title,
  desc,
  time,
  onPick,
  setEditMode,
}) {
  return (
    <CategoryBoxWrapper className={classes.CategoryBox}>
      <EditButton
        className={classes.EditButton}
        onClick={() => setEditMode(true)}
      />
      <CardWithTheme>
        <CategoryImage src={imageSrc} />
        <Link to={`/category/${title}/${id}`} onClick={() => onPick(id)}>
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
  setEditMode: PropTypes.func.isRequired,
};

export default memo(CategoryBox);
