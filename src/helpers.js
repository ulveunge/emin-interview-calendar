import {
  startOfWeek,
  getISODay,
  getMonth,
  previousMonday,
  nextMonday,
} from "date-fns";

export const getStartOfWeek = function (date) {
  return startOfWeek(date, { weekStartsOn: 1 });
};

export const getPreviosStartOfWeek = function (date) {
  return previousMonday(date);
};

export const getNextStartOfWeek = function (date) {
  return nextMonday(date);
};

export const getWeekdayName = function (date) {
  switch (getISODay(date)) {
    case 1:
      return "M";
    case 2:
    case 4:
      return "T";
    case 3:
      return "W";
    case 5:
      return "F";
    case 6:
    case 7:
      return "S";
    default:
      return;
  }
};

export const getMonthName = function (date) {
  const thursday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 4
  );

  switch (getMonth(thursday)) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return;
  }
};

export const getYear = function (date) {
  const thursday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 4
  );

  return thursday.getFullYear();
};
