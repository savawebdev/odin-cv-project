import styles from "./PersonalWrapper.module.css";

const PersonalWrapper = (props) => (
  <div className={styles["personal-preview"]}>{props.children}</div>
);

export default PersonalWrapper;
