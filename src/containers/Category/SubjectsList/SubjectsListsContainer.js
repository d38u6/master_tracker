import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

import { pickCategory } from "../../../store/actions";

function SubjectsListsContainer({
  subjects,
  categories,
  currentCategory,
  pickCategory,
  render,
  ...props
}) {
  const categoryId = props.match.params.id;

  const [categoryExist, setCategoryExist] = useState(true);
  useEffect(() => {
    setCategoryExist(Boolean(categories.find(({ id }) => id === categoryId)));
  }, [categories, categoryId]);

  useEffect(() => {
    if (currentCategory !== categoryId) {
      pickCategory(categoryId);
    }
  }, [currentCategory, categoryId, pickCategory]);

  const [categorySubjects, setCategorySubjects] = useState([]);
  useEffect(() => {
    if (currentCategory === categoryId) {
      setCategorySubjects(
        subjects.filter((subject) => subject.categoryId === categoryId)
      );
    }
  }, [currentCategory, categoryId, subjects]);

  return categoryExist ? render(categorySubjects) : <Redirect to="/" />;
}

SubjectsListsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  subjects: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string,
  pickCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ categories, subjects, app: { currentCategory } }) {
  return { categories, subjects, currentCategory };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { pickCategory })
)(SubjectsListsContainer);
