import React, { useState } from "react";
import PropTypes from "prop-types";

import RecordContainer from "Containers/Category/Record/RecordContainer";
import TableStriped from "Components/Utility/TableStriped/TableStriped";
import RowButton from "Components/Utility/Buttons/RowButton/RowButton";

import RecordRow from "./RecordRow/RecordRow";
import NoRecordsYet from "./NoRecordsYet";

function RecordsList({ records }) {
  const [recordsCount, setRecordsCount] = useState(30);
  const isMoreRecords = Boolean(records.length - 1 > recordsCount);

  const loadMoreHandlre = () => setRecordsCount((prev) => prev + 30);

  return (
    <TableStriped>
      {records.length > 0 ? (
        records
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
          ))
      ) : (
        <NoRecordsYet />
      )}

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
