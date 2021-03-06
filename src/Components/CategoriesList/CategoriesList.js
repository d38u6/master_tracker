import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import AddButton from "Components/Utility/Buttons/AddButton/AddButton";
import CategoryEditableContainer from "Containers/CategoriesList/CategoryEditable/CategoryEditableContainer";
import CategoryFormContainer from "Containers/CategoriesList/CategoryForm/CategoryFormContainer";

import CategoryBoxForm from "./CategoryBoxForm/CategoryBoxForm";
import CategoryBox from "./CategoryBox/CategoryBox";

function CategoriesList({ categories, onAddClick }) {
  return (
    <>
      <Row>
        {categories.map((category) => (
          <CategoryEditableContainer
            key={category.id}
            defaultEditMode={Boolean(category.editMode)}
            render={({ editMode, setEditMode, pickCategory }) =>
              editMode ? (
                <CategoryFormContainer
                  categoryId={category.id}
                  setEditMode={setEditMode}
                  render={(formConf) => <CategoryBoxForm {...formConf} />}
                />
              ) : (
                <CategoryBox
                  {...category}
                  setEditMode={setEditMode}
                  pickCategory={pickCategory}
                />
              )
            }
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
};

export default CategoriesList;
