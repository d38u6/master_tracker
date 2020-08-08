import React, { useState } from "react";
import PropTypes from "prop-types";
import TimeFormContainer from "../../../../containers/TimeForm/TimeFormContainer";
import AddTimeButton from "./AddTimeButton/AddTimeButton";

import TimeFormModal from "./TimeFormModal/TimeFormModal";
import TimeControl from "./TimeControl/TimeControl";
import classes from "./AddTime.module.css";
import { Button } from "react-bootstrap";

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
            <TimeControl label="Hours" min="0" max="23" {...hoursConf} />
            <TimeControl
              label="Minutes"
              className={classes.MarginLeft}
              min="0"
              max="59"
              {...minConf}
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
