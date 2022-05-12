import styles from "./PreviewInfo.module.css";

const PreviewInfo = (props) => (
  <p className={styles["preview-info"]}>{props.info}</p>
);

export default PreviewInfo;
