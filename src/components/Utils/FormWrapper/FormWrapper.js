import styles from "./FormWrapper.module.css";

const FormWrapper = (props) => {
  return (
    <form {...props.args} className={styles.form}>
      {props.children}
    </form>
  );
};

export default FormWrapper;
