import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  mapGoalsObjectToArray,
  reduceGoalsArrayToObject,
} from "../../utility/goalsConversion";
import { setGoals } from "../../store/actions";
import { showAlert } from "../../components/Utility/Alert/showAlert";
import Alerts from "../../components/Alerts";

export function GoalsSettingsContainer({ goals, setGoals, render }) {
  const initialGoalArray = useMemo(() => mapGoalsObjectToArray(goals), [goals]);
  const [goalsArray, setGoalsArray] = useState(initialGoalArray);

  useEffect(() => setGoalsArray(initialGoalArray), [initialGoalArray]);

  const handlerHoursChange = (id, { target: { value } }) => {
    setGoalsArray((state) =>
      state.map((goal) => {
        if (goal.id === id) {
          const valueNumb = Number(value);
          return {
            ...goal,
            hours:
              !isNaN(valueNumb) && valueNumb >= 0 ? Math.floor(valueNumb) : 0,
          };
        } else {
          return goal;
        }
      })
    );
  };

  const handlerMinutesChange = (id, { target: { value } }) => {
    setGoalsArray((state) =>
      state.map((goal) => {
        if (goal.id === id) {
          const valueNumb = Number(value);
          return {
            ...goal,
            minutes:
              !isNaN(valueNumb) && valueNumb >= 0
                ? valueNumb < 60
                  ? Math.floor(valueNumb)
                  : 59
                : 0,
          };
        } else {
          return goal;
        }
      })
    );
  };

  const handlerSaveChanges = () => {
    const goalsObject = reduceGoalsArrayToObject(goalsArray);
    setGoals(goalsObject);

    showAlert(Alerts.ChangesSaved);
  };

  return render({
    goals: goalsArray.map(({ id, hours, minutes }) => ({
      id,
      hoursConf: { value: hours, onChange: (e) => handlerHoursChange(id, e) },
      minConf: { value: minutes, onChange: (e) => handlerMinutesChange(id, e) },
    })),
    saveChanges: handlerSaveChanges,
  });
}

GoalsSettingsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  goals: PropTypes.object.isRequired,
  setGoals: PropTypes.func.isRequired,
};

function mapStateToProps({ settings: { goals } }) {
  return { goals };
}

export default connect(mapStateToProps, { setGoals })(GoalsSettingsContainer);
