import styles from "./TopBar.module.css";
import { PlusLg } from "react-bootstrap-icons";
import { isMatch } from "date-fns";

function TopBar(props) {
  const openModalHandler = function () {
    const promptString = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");

    if (promptString === null) return;

    const completeDateString = promptString.slice(
      promptString.indexOf("\n") + 1
    );

    if (isMatch(completeDateString, "yyyy-MM-dd HH:mm:ss")) {
      const [dateString, timeString] = completeDateString.split(" ");
      const [year, month, day] = dateString.split("-");
      const [hours, minutes, seconds] = timeString.split(":");
      const date = new Date(year, month - 1, day, hours, minutes, seconds);

      props.onSaveEvent(date);
    } else {
      alert("Date is invalid");
    }
  };

  return (
    <div className={styles["top-bar"]}>
      <h1>Interview Calendar</h1>
      <button onClick={openModalHandler}>
        <PlusLg size="30" color="#ff2d2d"></PlusLg>
      </button>
    </div>
  );
}

export default TopBar;
