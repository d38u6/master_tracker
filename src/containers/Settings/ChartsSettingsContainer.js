import { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setDefaultGoalChartType,
  setDefaultTimeChartType,
} from "../../store/actions";
import { showAlert } from "../../components/Utility/Alert/showAlert";
import Alerts from "../../components/Alerts";

import goalChartMenuItems from "../Charts/GoalChart/menuItems";
import timeChartMenuItems from "../Charts/TimeChart/menuItems";

export function ChartsSettingsContainer({
  render,
  defaultGoalChartType,
  setDefaultGoalChartType,
  defaultTimeChartType,
  setDefaultTimeChartType,
}) {
  const [typeGoalChart, setTypeGoalChart] = useState(defaultGoalChartType);
  const [typeTimeChart, setTypeTimeChart] = useState(defaultTimeChartType);

  useEffect(() => setTypeGoalChart(defaultGoalChartType), [
    defaultGoalChartType,
  ]);
  useEffect(() => setTypeTimeChart(defaultTimeChartType), [
    defaultTimeChartType,
  ]);

  const goalChartOptions = useMemo(
    () =>
      goalChartMenuItems.map(({ id, caption }) => ({ id, value: id, caption })),
    []
  );
  const timeChartOptions = useMemo(
    () =>
      timeChartMenuItems.map(({ id, caption }) => ({ id, value: id, caption })),
    []
  );

  const setTypeGoalChartHandler = (e) => {
    setTypeGoalChart(e.target.value);
  };

  const setTypeTimeChartHandler = (e) => {
    setTypeTimeChart(e.target.value);
  };

  const handlerSaveChanges = () => {
    setDefaultGoalChartType(typeGoalChart);
    setDefaultTimeChartType(typeTimeChart);
    showAlert(Alerts.ChangesSaved);
  };

  return render({
    goalChart: {
      options: goalChartOptions,
      value: typeGoalChart,
      onChange: setTypeGoalChartHandler,
    },
    timeChart: {
      options: timeChartOptions,
      value: typeTimeChart,
      onChange: setTypeTimeChartHandler,
    },
    saveChanges: handlerSaveChanges,
  });
}

ChartsSettingsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  setDefaultGoalChartType: PropTypes.func.isRequired,
  defaultGoalChartType: PropTypes.string.isRequired,
  defaultTimeChartType: PropTypes.string.isRequired,
  setDefaultTimeChartType: PropTypes.func.isRequired,
};

function mapStateToProps({
  settings: { defaultGoalChartType, defaultTimeChartType },
}) {
  return { defaultGoalChartType, defaultTimeChartType };
}

export default connect(mapStateToProps, {
  setDefaultGoalChartType,
  setDefaultTimeChartType,
})(ChartsSettingsContainer);
