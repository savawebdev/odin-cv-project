import styles from "./FormLabel.module.css";

const FormLabel = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={styles.label}>
      {props.labelName}
    </label>
  );
};

export default FormLabel;
