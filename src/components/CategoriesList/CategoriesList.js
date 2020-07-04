import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import CategoryBoxEditable from "./CategoryBoxEditable/CategoryBoxEditable";

const CategoriesList = ({ categories }) => {
  return (
    <>
      <Row>
        {categories.map((category) => (
          <CategoryBoxEditable key={category.id} {...category} />
        ))}
      </Row>
    </>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageURL: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      lastUpdate: PropTypes.number,
    })
  ).isRequired,
};

export default CategoriesList;
