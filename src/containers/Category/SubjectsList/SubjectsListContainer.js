import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import shortid from "shortid";
import PropTypes from "prop-types";

import { pickCategory, addSubject } from "../../../store/actions";
import { newSubject } from "../../../data/subjects";

export function SubjectsListContainer({
  subjects,
  categories,
  currentCategory,
  pickCategory,
  addSubject,
  render,
  ...props
}) {
  const categoryId = props.match.params.id;
  const [categoryExists, setCategoryExists] = useState(true);
  const [categorySubjects, setCategorySubjects] = useState([]);

  React.useEffect(() => {
    const categoryExists = Boolean(
      categories.find(({ id }) => id === categoryId)
    );
    if (!categoryExists) {
      setCategoryExists(false);
    } else if (currentCategory !== categoryId) {
      pickCategory(categoryId);
    } else {
      setCategorySubjects(
        subjects.filter((subject) => subject.categoryId === categoryId)
      );
    }
  }, [categories, subjects, categoryId, currentCategory, pickCategory]);

  const addSubjectHandler = () => {
    addSubject({
      id: shortid.generate(),
      categoryId: currentCategory,
      ...newSubject,
    });
  };

  return categoryExists ? (
    render({ subjects: categorySubjects, addSubject: addSubjectHandler })
  ) : (
    <Redirect to="/" />
  );
}

SubjectsListContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  subjects: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string,
  pickCategory: PropTypes.func.isRequired,
  addSubject: PropTypes.func.isRequired,
};

function mapStateToProps({ categories, subjects, app: { currentCategory } }) {
  return { categories, subjects, currentCategory };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { pickCategory, addSubject })
)(SubjectsListContainer);
