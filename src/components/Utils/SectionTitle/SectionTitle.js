import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => <h2 className={styles.title}>{props.title}</h2>;

export default SectionTitle;
