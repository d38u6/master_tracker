import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import CardWithTheme from "Components/Utility/WithTheme/CardWithTheme/CardWithTheme";
import BoxWrapper from "Components/Utility/BoxWrapper/BoxWrapper";
import CategoryImage from "Components/CategoriesList/CategoryBox/CategoryImage/CategoryImage";

import ImageControl from "./ImageControl/ImageControl";
import ApplyButton from "./ApplyButton/ApplyButton";
import TitleControl from "./TitleControl/TitleControl";
import DescriptionControl from "./DescriptionControl/DescriptionControl";
import RemoveButton from "./RemoveButton/RemoveButton";

import classes from "./CategoryBoxForm.module.css";

function CategoryBoxForm({
  titleConf,
  descConf,
  onApplyClick,
  onRemoveClick,
  imageConf,
}) {
  return (
    <BoxWrapper className={classes.CategoryBox}>
      <ImageControl
        activeSrc={imageConf.src}
        onSelect={imageConf.onChange}
        className={classes.ImageControl}
      />
      <ApplyButton onClick={onApplyClick} />

      <CardWithTheme>
        <CategoryImage src={imageConf.src} />
        <Card.Body>
          <TitleControl value={titleConf.value} onChange={titleConf.onChange} />
          <DescriptionControl
            value={descConf.value}
            onChange={descConf.onChange}
          />
        </Card.Body>
        <RemoveButton onClick={onRemoveClick} />
      </CardWithTheme>
    </BoxWrapper>
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
  onApplyClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CategoryBoxForm;
