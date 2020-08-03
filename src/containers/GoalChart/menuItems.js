import { THIS_DAY, THIS_WEEK, THIS_MONTH, THIS_YEAR } from "../../utility/time";
export default [
  { id: "levels", caption: "Levels", filter: "" },
  { id: "daily", caption: "Daily", filter: { name: THIS_DAY } },
  { id: "weekly", caption: "Weekly", filter: { name: THIS_WEEK } },
  { id: "monthly", caption: "Monthly", filter: { name: THIS_MONTH } },
  { id: "yearly", caption: "Yearly", filter: { name: THIS_YEAR } },
];
