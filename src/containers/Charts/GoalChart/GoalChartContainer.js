import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import menuItems from "./menuItems";
import { defaultGoals, goalsLevels } from "../../../data/goals";
import { createTimeFilter } from "../../../utility/time";

function GoalChartContainer({ records, render }) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

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
    let goalValue = defaultGoals[selectedItem.id];
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
  }, [records, selectedItem]);

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
};

export default GoalChartContainer;
