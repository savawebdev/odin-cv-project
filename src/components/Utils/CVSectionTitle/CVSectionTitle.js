import styles from "./CVSectionTitle.module.css";

const CVSectionTitle = (props) => (
  <h3 className={styles.title}>{props.title}</h3>
);

export default CVSectionTitle;
