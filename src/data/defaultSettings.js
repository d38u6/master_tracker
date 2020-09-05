import goalChartMenuItems from "../containers/Category/Charts/GoalChart/menuItems";
import timeChartMenuItems from "../containers/Category/Charts/TimeChart/menuItems";
import { defaultGoals } from "./goals";

export default {
  defaultGoalChartType: goalChartMenuItems[0].id,
  defaultTimeChartType: timeChartMenuItems[0].id,
  goals: defaultGoals,
};
