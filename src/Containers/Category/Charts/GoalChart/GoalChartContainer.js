import { useState, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import menuItems from "./menuItems";
import { goalsLevels } from "Data/goals";
import { createTimeFilter } from "Utility/time";

export function GoalChartContainer({
  records,
  defaultChartType,
  goals,
  render,
}) {
  const defaultMenuItem = useMemo(
    () => menuItems.find(({ id }) => id === defaultChartType),
    [defaultChartType]
  );
  const [selectedItem, setSelectedItem] = useState(defaultMenuItem);

  const selectItemHandler = (e) => {
    const activeItem = menuItems.find(({ id }) => id === e);
    setSelectedItem(activeItem);
  };

  const {
    menuItemsWithActive,
    summaryTime,
    name,
    goalValue,
    lastLvl,
  } = useMemo(() => {
    const menuItemsWithActive = menuItems.map((item) => ({
      ...item,
      active: item.id === selectedItem.id,
    }));

    const timeFilter = createTimeFilter(selectedItem.filter);

    const summaryTime = records
      .filter(({ date }) => timeFilter(date))
      .reduce((pv, { value }) => pv + value, 0);

    let name = selectedItem.caption;
    let goalValue = goals[selectedItem.id];
    let lastLvl = 0;

    if (selectedItem.id === "levels") {
      const currentLevel =
        goalsLevels.findIndex((value) => value > summaryTime) + 1;

      name = `Level ${currentLevel}`;
      goalValue = goalsLevels[currentLevel - 1];
      lastLvl = goalsLevels[currentLevel - 2];
    }
    return {
      summaryTime,
      name,
      goalValue,
      lastLvl,
      menuItemsWithActive,
    };
  }, [records, goals, selectedItem]);

  return render({
    progressBarConf: {
      value: summaryTime,
      goalValue,
      diff: lastLvl,
    },
    menuItems: menuItemsWithActive,
    name,
    selectItem: selectItemHandler,
  });
}

GoalChartContainer.propTypes = {
  records: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  defaultChartType: PropTypes.string.isRequired,
  goals: PropTypes.object,
};

function mapStateToProps({ settings: { defaultGoalChartType, goals } }) {
  return { defaultChartType: defaultGoalChartType, goals };
}

export default connect(mapStateToProps)(GoalChartContainer);
