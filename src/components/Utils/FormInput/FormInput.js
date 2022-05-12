import styles from "./FormInput.module.css";

const FormInput = (props) => {
  return (
    <input
      {...props.args}
      className={
        props.args.type === "month" ? styles["month-input"] : styles.input
      }
    />
  );
};

export default FormInput;
