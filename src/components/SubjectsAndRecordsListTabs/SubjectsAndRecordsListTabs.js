import React from "react";
import PropTypes from "prop-types";

import Tabs from "../Utility/Tabs/Tabs";
import Tab from "../Utility/Tabs/Tab";
import SubjectsList from "../SubjectsList/SubjectsList";
import RecordsList from "../RecordsList/RecordsList";

function SubjectsAndRecordsListTabs({ subjects, addSubject, records }) {
  return (
    <Tabs id="SubjectsAndRecordsListTabs">
      <Tab eventKey="subjectsList" title="Subjects">
        <SubjectsList subjects={subjects} onAddClick={addSubject} />
      </Tab>
      <Tab eventKey="recordsList" title="Records">
        <RecordsList records={records} />
      </Tab>
    </Tabs>
  );
}
SubjectsAndRecordsListTabs.propTypes = {
  subjects: PropTypes.array.isRequired,
  addSubject: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
};

export default SubjectsAndRecordsListTabs;
