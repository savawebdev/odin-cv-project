import styles from "./PreviewSubTitle.module.css";

const PreviewSubTitle = (props) => {
  <h3 className={styles["preview-subtitle"]}>
    <span>{props.name}</span> - {props.city}
  </h3>;
};

export default PreviewSubTitle;
