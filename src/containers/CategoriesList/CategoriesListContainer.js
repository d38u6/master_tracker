import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCategories } from "../../store/actions";
import * as fakeData from "../../data/fixtures";

export function CategoriesListContainer({ categories, setCategories, render }) {
  useEffect(() => {
    if (categories.length < 1) {
      setCategories(fakeData.categories);
    }
  }, [categories, setCategories]);

  const addCategoryHandler = () => {
    console.log("Add new category");
  };

  return render({ categories, addCategory: addCategoryHandler });
}

CategoriesListContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { setCategories })(
  CategoriesListContainer
);
