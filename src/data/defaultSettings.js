import goalChartMenuItems from "../containers/Charts/GoalChart/menuItems";
import timeChartMenuItems from "../containers/Charts/TimeChart/menuItems";
import { defaultGoals } from "./goals";

export default {
  defaultGoalChartType: goalChartMenuItems[0].id,
  defaultTimeChartType: timeChartMenuItems[0].id,
  goals: defaultGoals,
};
