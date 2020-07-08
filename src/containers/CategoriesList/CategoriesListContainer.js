import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortId from "shortid";

import { getCategories } from "../../utility/localStorageManager/localStorageManager";
import { setCategories, addCategory } from "../../store/actions";
import { initialCategories, newCategory } from "../../data/categories";

export function CategoriesListContainer({
  categories,
  setCategories,
  addCategory,
  render,
}) {
  useEffect(() => {
    if (categories.length < 1) {
      const categories = getCategories();
      if (categories > 0) {
        setCategories(categories);
      } else {
        setCategories(initialCategories);
      }
    }
  }, [categories, setCategories]);

  const addCategoryHandler = () => {
    addCategory({ ...newCategory, id: shortId.generate() });
  };

  return render({ categories, addCategory: addCategoryHandler });
}

CategoriesListContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { setCategories, addCategory })(
  CategoriesListContainer
);
