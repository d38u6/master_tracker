import React, { useState, useMemo } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import shortid from "shortid";
import PropTypes from "prop-types";

import { pickCategory, addSubject, pickSubject } from "../../store/actions";
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
  currentSubject,
  pickCategory,
  pickSubject,
  addSubject,
  render,
  ...props
}) {
  const id = props.match.params.id;
  const [exists, setExists] = useState(true);

  //setExists
  React.useEffect(() => {
    if (!Boolean(categories.find((category) => category.id === id))) {
      setExists(false);
    } else if (currentCategory !== id) {
      pickCategory(id);
    }
  }, [id, categories, pickCategory, currentCategory]);

  //setCurrentSubject
  React.useEffect(() => {
    pickSubject(null);
  }, [pickSubject]);

  const categoryRecords = useMemo(
    () =>
      records
        .filter(({ categoryId }) => categoryId === currentCategory)
        .sort((a, b) => b.date - a.date),
    [records, currentCategory]
  );

  const categorySubjects = useMemo(
    () =>
      subjects
        .filter((subject) => subject.categoryId === currentCategory)
        .map((sub) => ({
          ...sub,
          summaryTime: calculateSummaryTime(sub.id, categoryRecords),
          active: sub.id === currentSubject,
        })),
    [subjects, currentCategory, categoryRecords, currentSubject]
  );

  const enrichedRecords = useMemo(
    () =>
      categoryRecords.map((record) => ({
        ...record,
        subjectTitle:
          categorySubjects.find(({ id }) => id === record.subjectId)?.title ||
          "General",
      })),
    [categoryRecords, categorySubjects]
  );

  const filteredRecords = useMemo(
    () =>
      enrichedRecords.filter(
        ({ subjectId }) => subjectId === currentSubject || !currentSubject
      ),
    [currentSubject, enrichedRecords]
  );

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
      records: filteredRecords,
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
  currentSubject: PropTypes.string,
  pickCategory: PropTypes.func.isRequired,
  addSubject: PropTypes.func.isRequired,
};

function mapStateToProps({
  categories,
  subjects,
  records,
  app: { currentCategory, currentSubject },
}) {
  return { categories, subjects, records, currentCategory, currentSubject };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { pickCategory, pickSubject, addSubject })
)(CategoryContainer);
