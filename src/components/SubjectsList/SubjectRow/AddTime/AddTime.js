import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import TimeFormContainer from "../../../../containers/Category/TimeForm/TimeFormContainer";
import AddTimeButton from "./AddTimeButton/AddTimeButton";
import TimeFormModal from "./TimeFormModal/TimeFormModal";
import HoursAndMinutesControl from "../../../Utility/HoursAndMinutesControl/HoursAndMinutesControl";
import classes from "./AddTime.module.css";

function AddTime(props) {
  const [showForm, setShowForm] = useState(false);
  return (
    <TimeFormContainer
      {...props}
      render={({ hoursConf, minConf, apply }) => (
        <td>
          <TimeFormModal
            show={showForm}
            onHide={() => setShowForm(false)}
            title={props.title}
          >
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
