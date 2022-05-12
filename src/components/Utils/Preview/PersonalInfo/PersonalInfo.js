import styles from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  return (
    <p className={styles["personal-info"]}>
      <span>{props.label}:</span> {props.info}
    </p>
  );
};

export default PersonalInfo;
