import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import TimeFormContainer from "Containers/Category/SubjectsList/TimeForm/TimeFormContainer";
import HoursAndMinutesControl from "Components/Utility/Controls/HoursAndMinutesControl/HoursAndMinutesControl";
import DateTimePickerWithTheme from "Components/Utility/WithTheme/DateTimePickerWithTheme/DateTimePickerWithTheme";

import AddTimeButton from "./AddTimeButton/AddTimeButton";
import TimeFormModal from "./TimeFormModal/TimeFormModal";
import classes from "./AddTime.module.css";

function AddTime(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <TimeFormContainer
      {...props}
      render={({ dateConf, hoursConf, minConf, apply }) => (
        <td>
          <TimeFormModal
            show={showForm}
            onHide={() => setShowForm(false)}
            title={props.title}
          >
            <DateTimePickerWithTheme
              {...dateConf}
              className={classes.DatePicker}
              format="y-MM-dd"
              clearIcon={null}
            />
            <HoursAndMinutesControl
              hoursConf={hoursConf}
              minConf={minConf}
              withMinMax
            />
            <Button
              variant="success"
              size="sm"
              className={classes.ApplyButton}
              onClick={() => {
                setShowForm(false);
                apply();
              }}
            >
              ADD
            </Button>
          </TimeFormModal>
          <AddTimeButton onClick={() => setShowForm(true)} />
        </td>
      )}
    />
  );
}

AddTime.propTypes = {
  subjectId: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default AddTime;
