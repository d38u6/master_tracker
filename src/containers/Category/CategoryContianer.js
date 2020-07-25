import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import shortid from "shortid";
import PropTypes from "prop-types";

import { pickCategory, addSubject } from "../../store/actions";
import { newSubject } from "../../data/subjects";

export function CategoryContainer({
  categories,
  currentCategory,
  pickCategory,
  addSubject,
  render,
  ...props
}) {
  const id = props.match.params.id;
  const [exists, setExists] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const [records, setRecords] = useState([]);

  //setExists
  useEffect(() => {
    if (!Boolean(categories.find((category) => category.id === id))) {
      setExists(false);
    } else if (currentCategory !== id) {
      pickCategory(id);
    }
  }, [id, categories, pickCategory, currentCategory]);

  //setSubjects
  useEffect(
    () =>
      setSubjects(
        props.subjects.filter((subject) => subject.categoryId === id)
      ),
    [props.subjects, id]
  );

  //setRecords
  useEffect(() => setRecords(["1"]), []);

  const addSubjectHandler = () => {
    addSubject({
      id: shortid.generate(),
      categoryId: id,
      ...newSubject,
    });
  };

  return exists ? (
    render({ subjects, records, addSubject: addSubjectHandler })
  ) : (
    <Redirect to="/" />
  );
}

CategoryContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
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
)(CategoryContainer);
