import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCategories } from "../store/actions";
import * as fakeData from "../data/fixtures";

const CategoriesContainer = ({ categories, setCategories, render }) => {
  useEffect(() => {
    if (categories.length < 1) {
      setCategories(fakeData.categories);
    }
  }, [categories, setCategories]);

  return render(categories);
};

CategoriesContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { setCategories })(CategoriesContainer);
