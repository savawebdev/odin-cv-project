import styles from "./FormControl.module.css";

const FormControl = (props) => (
  <div className={styles["form-control"]}>{props.children}</div>
);

export default FormControl;
