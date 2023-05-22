import styles from "./HoursTable.module.css";
import Table from "../UI/Table";
import {
  eachDayOfInterval,
  endOfWeek,
  isWithinInterval,
  format,
} from "date-fns";

import { useState } from "react";

// 2023-05-22 15:15:15

function HoursTable(props) {
  const [selectedCell, setSelectedCell] = useState(null);

  const selectTimeHandler = function (e, id) {
    setSelectedCell(id);

    props.onToBeDeletedEvent(e.target.dataset.eventId);
  };

  const currentWeekDays = eachDayOfInterval({
    start: props.monday,
    end: endOfWeek(props.monday, { weekStartsOn: 1 }),
  });

  const formattedCurrentWeekdays = currentWeekDays.map((weekday) =>
    format(weekday, "yyyy-MM-dd")
  );

  const filteredEvents =
    props.events.length > 0
      ? props.events
          .filter((event) =>
            isWithinInterval(event.date, {
              start: currentWeekDays.at(0),
              end: currentWeekDays.at(-1),
            })
          )
          .map((event) => {
            return {
              dateString: format(event.date, "yyyy-MM-dd HH:") + "00",
              id: event.id,
            };
          })
      : null;

  const hoursTableContent = [...Array(24)].map((_, i) => {
    return (
      <tr key={i}>
        {[...Array(8)].map((_, j) => {
          const id = `j${j}i${i}`;
          const timeText = `${String(i + 1).padStart(2, "0")}:00`;
          const timeActual = `${String(i).padStart(2, "0")}:00`;

          if (i !== 23 && j === 0)
            return (
              <td key={id}>
                <div className={styles.hours}>{timeText}</div>
              </td>
            );

          if (j !== 0) {
            const dateStr = `${formattedCurrentWeekdays[j - 1]} ${timeActual}`;

            const checkDateString = function (eventList) {
              return (
                eventList &&
                eventList.some((event) => event.dateString === dateStr)
              );
            };

            return (
              <td
                key={id}
                date={dateStr}
                data-active={checkDateString(filteredEvents)}
                data-event-id={
                  checkDateString(filteredEvents)
                    ? filteredEvents.find(
                        (event) => event.dateString === dateStr
                      ).id
                    : "none"
                }
                onClick={(e) => selectTimeHandler(e, id)}
                data-selected={selectedCell === id}
              ></td>
            );
          }
          return <td key={id}></td>;
        })}
      </tr>
    );
  });

  return (
    <div className={styles["hours-table-wrapper"]}>
      <Table className={styles.table}>{hoursTableContent}</Table>
    </div>
  );
}

export default HoursTable;
