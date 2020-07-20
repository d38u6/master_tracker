import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

import { pickCategory } from "../../../store/actions";

function SubjectsListsContainer({
  subjects,
  currentCategory,
  pickCategory,
  render,
  ...props
}) {
  const categoryId = props.match.params.id;
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

  return render(categorySubjects);
}

SubjectsListsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  currentCategory: PropTypes.string,
  pickCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ subjects, app: { currentCategory } }) {
  return { subjects, currentCategory };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { pickCategory })
)(SubjectsListsContainer);
