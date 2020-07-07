import React from "react";
import PropTypes from "prop-types";
import { Col, Card, Form } from "react-bootstrap";

import withTheme from "../../../HOC/withTheme";
import ApplyButton from "../../Utility/ApplyButton/ApplyButton";
import RemoveButton from "../../Utility/RemoveButton/RemoveButton";
import SelectImageContainer from "../../../containers/SelectImageContainer/SelectImageContainer";
import SelectImage from "../../Utility/SelectImage/SelectImage";

import classes from "./CategoryBoxForm.module.css";

function CategoryBoxForm({
  titleConf,
  descConf,
  onSaveClick,
  onRemoveClick,
  imageConf,
  theme,
}) {
  return (
    <Col md="4">
      <div className={classes.CategoryBox}>
        <div className={classes.ImageButton}>
          <SelectImageContainer
            activeSrc={imageConf.src}
            onSelect={imageConf.onChange}
            render={(props) => <SelectImage {...props} />}
          />
        </div>
        <div className={classes.ApplyButton}>
          <ApplyButton onClick={onSaveClick} />
        </div>
        <Card bg={theme.bg} text={theme.text}>
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
        </Card>
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
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }),
};

export default withTheme(CategoryBoxForm);
