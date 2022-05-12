import styles from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <button {...props.args} className={styles.btn}>
      / {props.label}
    </button>
  );
};

export default FormButton;
