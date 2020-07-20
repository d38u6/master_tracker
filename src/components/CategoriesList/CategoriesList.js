import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import CategoryBoxEditable from "./CategoryBoxEditable/CategoryBoxEditable";
import AddButton from "../Utility/AddButton/AddButton";

function CategoriesList({ categories, onAddClick, pickCategory }) {
  return (
    <>
      <Row>
        {categories.map((category) => (
          <CategoryBoxEditable
            key={category.id}
            {...category}
            onPickCategory={pickCategory}
          />
        ))}
        <AddButton onClick={onAddClick} />
      </Row>
    </>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageSrc: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      lastUpdate: PropTypes.number,
    })
  ).isRequired,
  onAddClick: PropTypes.func.isRequired,
  pickCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
