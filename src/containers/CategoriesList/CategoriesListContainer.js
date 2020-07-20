import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortId from "shortid";

import { setCategories, addCategory, pickCategory } from "../../store/actions";
import { initialCategories, newCategory } from "../../data/categories";

export function CategoriesListContainer({
  categories,
  setCategories,
  addCategory,
  pickCategory,
  render,
}) {
  useEffect(() => {
    if (categories.length < 1) {
      setCategories(initialCategories);
    }
  }, [categories, setCategories]);

  const addCategoryHandler = () => {
    addCategory({ ...newCategory, id: shortId.generate() });
  };

  const pickCategoryHandler = (id) => {
    pickCategory(id);
  };

  return render({
    categories,
    addCategory: addCategoryHandler,
    pickCategory: pickCategoryHandler,
  });
}

CategoriesListContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  pickCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, {
  setCategories,
  addCategory,
  pickCategory,
})(CategoriesListContainer);
