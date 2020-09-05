import React, { useState } from "react";
import PropTypes from "prop-types";
import TableStriped from "../../Utility/TableStriped/TableStriped";
import RecordRow from "./RecordRow/RecordRow";
import RecordContainer from "../../../containers/Category/Record/RecordContainer";
import RowButton from "../../Utility/Buttons/RowButton/RowButton";

function RecordsList({ records }) {
  const [recordsCount, setRecordsCount] = useState(30);
  const isMoreRecords = Boolean(records.length - 1 > recordsCount);

  const loadMoreHandlre = () => setRecordsCount((prev) => prev + 30);

  return (
    <TableStriped>
      {records
        .slice(0, recordsCount)
        .map(({ id, subjectTitle, date, value }) => (
          <RecordContainer
            key={id}
            id={id}
            render={({ removeRecord }) => (
              <RecordRow
                subjectTitle={subjectTitle}
                date={date}
                value={value}
                removeRecord={removeRecord}
              />
            )}
          />
        ))}
      {isMoreRecords && (
        <RowButton onClick={loadMoreHandlre}>
          <span>Load More</span>
        </RowButton>
      )}
    </TableStriped>
  );
}

RecordsList.propTypes = {
  records: PropTypes.array.isRequired,
};

export default RecordsList;
