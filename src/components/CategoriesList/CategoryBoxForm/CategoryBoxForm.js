import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";

import classes from "./CategoryBoxForm.module.css";

import ImageControl from "./ImageControl/ImageControl";
import ApplyButton from "./ApplyButton/ApplyButton";
import CardWithTheme from "../../Utility/CardWithTheme/CardWithTheme";
import CategoryImage from "../CategoryBox/CategoryImage/CategoryImage";
import TitleControl from "./TitleControl/TitleControl";
import DescriptionControl from "./DescriptionControl/DescriptionControl";
import RemoveButton from "./RemoveButton/RemoveButton";

function CategoryBoxForm({
  titleConf,
  descConf,
  onSaveClick,
  onRemoveClick,
  imageConf,
}) {
  return (
    <Col md="4">
      <div className={classes.CategoryBox}>
        <ImageControl
          activeSrc={imageConf.src}
          onSelect={imageConf.onChange}
          className={classes.ImageControl}
        />
        <ApplyButton onClick={onSaveClick} />

        <CardWithTheme>
          <CategoryImage src={imageConf.src} />
          <Card.Body>
            <TitleControl
              className={classes.TitleInput}
              value={titleConf.value}
              onChange={titleConf.onChange}
            />
            <DescriptionControl
              value={descConf.value}
              onChange={descConf.onChange}
            />
          </Card.Body>
          <RemoveButton onClick={onRemoveClick} />
        </CardWithTheme>
      </div>
    </Col>
  );
}

CategoryBoxForm.propTypes = {
  titleConf: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  descConf: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  imageConf: PropTypes.shape({
    src: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  onSaveClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

export default CategoryBoxForm;
