import styles from "./PreviewDate.module.css";

const PreviewDate = (props) => {
  return (
    <small className={styles["preview-date"]}>
      {props.startDate} - {props.endDate}
    </small>
  );
};

export default PreviewDate;
