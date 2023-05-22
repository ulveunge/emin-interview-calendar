import styles from "./WeekDays.module.css";
import Table from "../UI/Table";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import {
  getPreviosStartOfWeek,
  getNextStartOfWeek,
  getWeekdayName,
  getMonthName,
} from "../../helpers";
import { getYear, isToday } from "date-fns";

function WeekDays(props) {
  const getPreviousWeekHandler = function () {
    props.onChangeDate(getPreviosStartOfWeek(props.date));
  };

  const getNextWeekHandler = function () {
    props.onChangeDate(getNextStartOfWeek(props.date));
  };

  const dateClone = new Date(props.date.getTime());

  const weekdaysContent = [...Array(7)].map((_, i) => {
    let currentDay = i === 0 ? dateClone.getDate() : dateClone.getDate() + 1;
    const currentDate = new Date(dateClone.setDate(currentDay));
    currentDay = currentDate.getDate();

    return (
      <td key={i}>
        <div className={styles.weekday}>{getWeekdayName(currentDate)}</div>
        <div
          className={`${styles.day} ${
            isToday(currentDate) ? styles.today : ""
          }`}
        >
          {currentDay}
        </div>
      </td>
    );
  });

  return (
    <div className={styles["weekdays-wrapper"]}>
      <Table className={styles["weekdays-table"]}>
        <tr>
          <td></td>
          {weekdaysContent}
        </tr>
        <tr className={styles["controls"]}>
          <td></td>
          <td>
            <button onClick={getPreviousWeekHandler}>
              <ChevronLeft size="22" color="#ff2d2d"></ChevronLeft>
            </button>
          </td>
          <td colSpan={5}>
            <div>{`${getMonthName(props.date)} ${getYear(props.date)}`}</div>
          </td>
          <td>
            <button onClick={getNextWeekHandler}>
              <ChevronRight size="22" color="#ff2d2d"></ChevronRight>
            </button>
          </td>
        </tr>
      </Table>
    </div>
  );
}

export default WeekDays;
