import styles from "./Table.module.css";

function Table(props) {
  return (
    <table className={`${styles.table} ${props.className}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
