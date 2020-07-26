import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import shortid from "shortid";
import PropTypes from "prop-types";

import { pickCategory, addSubject } from "../../store/actions";
import { newSubject } from "../../data/subjects";

export function calculateSummaryTime(subId, records) {
  return records
    .filter(({ subjectId }) => subId === subjectId)
    .reduce((pv, { value }) => pv + value, 0);
}

export function CategoryContainer({
  categories,
  subjects,
  records,
  currentCategory,
  pickCategory,
  addSubject,
  render,
  ...props
}) {
  const id = props.match.params.id;
  const [exists, setExists] = useState(true);
  const [prevRecords, setPrevRecords] = useState(null);
  const [categoryRecords, setCategoryRecords] = useState([]);

  //setExists
  React.useEffect(() => {
    if (!Boolean(categories.find((category) => category.id === id))) {
      setExists(false);
    } else if (currentCategory !== id) {
      pickCategory(id);
    }
  }, [id, categories, pickCategory, currentCategory]);

  if (prevRecords !== records) {
    setCategoryRecords(
      records.filter(({ categoryId }) => categoryId === currentCategory)
    );
    setPrevRecords(records);
  }

  const categorySubjects = subjects
    .filter((subject) => subject.categoryId === currentCategory)
    .map((sub) => ({
      ...sub,
      summaryTime: calculateSummaryTime(sub.id, categoryRecords),
    }));

  const addSubjectHandler = () => {
    addSubject({
      id: shortid.generate(),
      categoryId: id,
      ...newSubject,
    });
  };

  return exists ? (
    render({
      subjects: categorySubjects,
      records: categoryRecords,
      addSubject: addSubjectHandler,
    })
  ) : (
    <Redirect to="/" />
  );
}

CategoryContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
  records: PropTypes.array.isRequired,
  currentCategory: PropTypes.string,
  pickCategory: PropTypes.func.isRequired,
  addSubject: PropTypes.func.isRequired,
};

function mapStateToProps({
  categories,
  subjects,
  records,
  app: { currentCategory },
}) {
  return { categories, subjects, records, currentCategory };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { pickCategory, addSubject })
)(CategoryContainer);
