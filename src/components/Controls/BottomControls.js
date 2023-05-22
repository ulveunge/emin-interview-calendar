import styles from "./BottomControls.module.css";

function BottomControls(props) {
  return (
    <div className={styles["bottom-controls"]}>
      <button onClick={props.onResetDate}>Today</button>
      {props.isDeleteButtonVisible && (
        <button onClick={props.onDeleteEvent}>Delete</button>
      )}
    </div>
  );
}

export default BottomControls;
