import goalChartMenuItems from "Containers/Category/Charts/GoalChart/menuItems";
import timeChartMenuItems from "Containers/Category/Charts/TimeChart/menuItems";
import { defaultGoals } from "./goals";

export default {
  defaultGoalChartType: goalChartMenuItems[0].id,
  defaultTimeChartType: timeChartMenuItems[4].id,
  goals: defaultGoals,
};
