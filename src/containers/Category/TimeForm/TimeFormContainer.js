import { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";

import { addRecord } from "../../../store/actions";
import { showAlert } from "../../../components/Utility/Alert/showAlert";
import Alerts from "../../../components/Alerts";

export function TimeFormContainer({
  categoryId,
  subjectId,
  render,
  addRecord,
}) {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);

  const setHoursHandler = (value) => {
    const valueNumb = Number(value);
    if (!isNaN(valueNumb) && valueNumb >= 0) {
      setHours(valueNumb < 24 ? Math.floor(valueNumb) : 23);
    } else {
      setHours(0);
    }
  };

  const setMinHandler = (value) => {
    const valueNumb = Number(value);
    if (!isNaN(valueNumb) && valueNumb >= 0) {
      setMin(valueNumb < 60 ? Math.floor(valueNumb) : 59);
    } else {
      setMin(0);
    }
  };

  const applyHander = () => {
    const value = hours * 60 + min;
    if (value > 0) {
      const record = {
        id: shortid.generate(),
        categoryId,
        subjectId,
        date: Date.now(),
        value,
      };
      setHours(0);
      setMin(0);
      addRecord(record);
      showAlert(Alerts.TimeAdded);
    }
  };

  return render({
    hoursConf: {
      value: hours,
      onChange: ({ target: { value } }) => setHoursHandler(value),
    },
    minConf: {
      value: min,
      onChange: ({ target: { value } }) => setMinHandler(value),
    },
    apply: applyHander,
  });
}

TimeFormContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  subjectId: PropTypes.string.isRequired,
  //redux
  addRecord: PropTypes.func.isRequired,
};

export default connect(null, { addRecord })(TimeFormContainer);
