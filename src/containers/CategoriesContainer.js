import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCategories } from "../store/actions";
import * as fakeData from "../data/fixtures";

function CategoriesContainer({
  onAddCategory,
  categories,
  setCategories,
  render,
}) {
  useEffect(() => {
    if (categories.length < 1) {
      setCategories(fakeData.categories);
    }
  }, [categories, setCategories]);

  const addCategoryHandler = () => {
    if (onAddCategory) onAddCategory();
    console.log("Add new category");
  };

  return render({ categories, addCategory: addCategoryHandler });
}

CategoriesContainer.propTypes = {
  render: PropTypes.func.isRequired,
  onAddCategory: PropTypes.func,
  //redux
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { setCategories })(CategoriesContainer);
