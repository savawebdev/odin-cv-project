import styles from "./PreviewSection.module.css";

const PreviewSection = (props) => (
  <div className={styles["preview-section"]}>{props.children}</div>
);

export default PreviewSection;
