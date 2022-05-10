import { Component } from "react";
import styles from "./FormInput.module.css";

class FormInput extends Component {
  render() {
    return (
      <input
        {...this.props.args}
        className={
          this.props.args.type === "month"
            ? styles["month-input"]
            : styles.input
        }
      />
    );
  }
}

export default FormInput;
