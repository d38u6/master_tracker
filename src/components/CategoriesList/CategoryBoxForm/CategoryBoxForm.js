import React from "react";
import PropTypes from "prop-types";
import { Col, Card, Form } from "react-bootstrap";

import CardWithTheme from "../../Utility/CardWithTheme/CardWithTheme";
import ApplyButton from "../../Utility/ApplyButton/ApplyButton";
import RemoveButton from "../../Utility/RemoveButton/RemoveButton";

import classes from "./CategoryBoxForm.module.css";
import ImageControl from "./ImageControl/ImageControl";
import CircleButtonWrapper from "../CategoryBox/CircleButtonWrapper/CircleButtonWrapper";

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
        <CircleButtonWrapper>
          <ApplyButton onClick={onSaveClick} />
        </CircleButtonWrapper>
        <CardWithTheme>
          <Card.Img
            variant="top"
            src={imageConf.src}
            style={{ height: "160px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>
              <Form.Control
                className={classes.TitleInput}
                type="text"
                placeholder="Category Title"
                value={titleConf.value}
                onChange={titleConf.onChange}
              />
            </Card.Title>
            <Card.Text>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Category description"
                value={descConf.value}
                onChange={descConf.onChange}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <RemoveButton onClick={onRemoveClick} />
          </Card.Footer>
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
