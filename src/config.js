import { startOfDay } from "date-fns";

export const INITIAL_EVENTS = [
  {
    date: new Date(2023, 3, 20, 9, 50, 30),
    id: "e1",
  },
  {
    date: new Date(2023, 3, 29, 12, 42, 23),
    id: "e2",
  },
  {
    date: new Date(2023, 4, 12, 15, 24, 21),
    id: "e3",
  },
  {
    date: new Date(2023, 4, 16, 18, 33, 33),
    id: "e4",
  },
  {
    date: new Date(2023, 4, 23, 9, 10, 11),
    id: "e5",
  },
];

export const TODAY = startOfDay(new Date());
