import { useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import menuItems from "./menuItems";
import { createTimeFilter, createDays } from "Utility/time";
import mapRecordsToDays from "Utility/mapRecordsToDays";

export function TimeChartContainer({ records, defaultChartType, render }) {
  const defaultMenuItem = useMemo(
    () => menuItems.find(({ id }) => id === defaultChartType),
    [defaultChartType]
  );
  const [selectedItem, setSelectedItem] = useState(defaultMenuItem);
  const days = useMemo(() => mapRecordsToDays(records), [records]);

  const selectItemHandler = (e) => {
    const activeItem = menuItems.find(({ id }) => id === e);
    setSelectedItem(activeItem);
  };

  const axes = useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const { data, menuItemsWithActive } = useMemo(() => {
    const menuItemsWithActive = menuItems.map((item) => ({
      ...item,
      active: item.id === selectedItem.id,
    }));

    const timeFilter = createTimeFilter(selectedItem.filter);
    const emptyDays = [...createDays(selectedItem.filter)].reduce(
      (pv, cv) => pv.set(cv, 0),
      new Map()
    );
    const dataDays = days
      .filter(({ date }) => timeFilter(date))
      .reduce(
        (pv, { date, value }) =>
          pv.set(new Date(date).setHours(0, 0, 0, 0), value),
        emptyDays
      );

    const data = [
      [...dataDays].map(([date, value]) => [new Date(date), value]),
    ];

    return { data, menuItemsWithActive };
  }, [days, selectedItem.id, selectedItem.filter]);

  return render({
    name: selectedItem.caption,
    menuItems: menuItemsWithActive,
    selectItem: selectItemHandler,
    chartConf: {
      axes,
      data,
    },
  });
}

TimeChartContainer.propTypes = {
  records: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  defaultChartType: PropTypes.string.isRequired,
};

function mapStateToProps({ settings: { defaultTimeChartType } }) {
  return { defaultChartType: defaultTimeChartType };
}

export default connect(mapStateToProps)(TimeChartContainer);
