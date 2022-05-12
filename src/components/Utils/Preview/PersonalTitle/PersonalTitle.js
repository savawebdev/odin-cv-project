import styles from "./PersonalTitle.module.css";

const PersonalTitle = (props) => (
  <h2 className={styles.title}>{props.title}</h2>
);

export default PersonalTitle;
