import { THIS_WEEK, THIS_MONTH, THIS_YEAR, LAST_DAYS } from "Utility/time";
export default [
  { id: "weekly", caption: "Weekly", filter: { name: THIS_WEEK } },
  {
    id: "7days",
    caption: "7 Days",
    filter: { name: LAST_DAYS, numbOfDays: 7 },
  },
  { id: "monthly", caption: "Monthly", filter: { name: THIS_MONTH } },
  {
    id: "30days",
    caption: "30 Days",
    filter: { name: LAST_DAYS, numbOfDays: 30 },
  },
  {
    id: "90days",
    caption: "90 Days",
    filter: { name: LAST_DAYS, numbOfDays: 90 },
  },
  { id: "yearly", caption: "Yearly", filter: { name: THIS_YEAR } },
  {
    id: "365days",
    caption: "365 Days",
    filter: { name: LAST_DAYS, numbOfDays: 365 },
  },
];
