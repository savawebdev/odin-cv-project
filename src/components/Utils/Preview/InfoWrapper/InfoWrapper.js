import styles from "./InfoWrapper.module.css";

const InfoWrapper = (props) => {
  return (
    <div {...props.args} className={styles["info-wrapper"]}>
      {props.children}
    </div>
  );
};

export default InfoWrapper;
