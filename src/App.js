import { useState } from "react";
import Wrapper from "./components/UI/Wrapper";
import TopBar from "./components/Controls/TopBar";
import WeekDays from "./components/Calendar/WeekDays";
import HoursTable from "./components/Calendar/HoursTable";
import BottomControls from "./components/Controls/BottomControls";
import { TODAY, INITIAL_EVENTS } from "./config";
import { getStartOfWeek } from "./helpers";
import { isEqual } from "date-fns";

function App() {
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(
    getStartOfWeek(TODAY)
  );
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [toBeDeletedEvent, setToBeDeletedEvent] = useState(null);

  const toBeDeletedEventHandler = function (id) {
    if (id === "none") {
      setToBeDeletedEvent(null);
      return;
    }
    setToBeDeletedEvent(id);
  };

  const deleteEventHandler = function () {
    setEvents(events.filter((event) => event.id !== toBeDeletedEvent));
    setToBeDeletedEvent(null);
  };

  const changeDateHandler = function (date) {
    setCurrentStartOfWeek(date);
  };

  const resetDateHandler = function () {
    setCurrentStartOfWeek(getStartOfWeek(TODAY));
  };

  const saveEventHandler = function (date) {
    if (
      events.length > 0 &&
      events.some((event) => {
        const eventClone = new Date(event.date.getTime()).setMinutes(0);
        const dateClone = new Date(date.getTime()).setMinutes(0);
        return isEqual(eventClone, dateClone);
      })
    )
      return;
    setEvents((prevState) => [
      ...prevState,
      { date, id: (Math.random() * 10000000).toFixed() },
    ]);
  };

  return (
    <Wrapper>
      <TopBar onSaveEvent={saveEventHandler}></TopBar>
      <WeekDays
        date={currentStartOfWeek}
        onChangeDate={changeDateHandler}
      ></WeekDays>
      <HoursTable
        monday={currentStartOfWeek}
        events={events}
        onToBeDeletedEvent={toBeDeletedEventHandler}
      ></HoursTable>
      <BottomControls
        onResetDate={resetDateHandler}
        isDeleteButtonVisible={toBeDeletedEvent}
        onDeleteEvent={deleteEventHandler}
      ></BottomControls>
    </Wrapper>
  );
}

export default App;
