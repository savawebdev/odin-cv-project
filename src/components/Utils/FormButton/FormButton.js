import { Component } from "react";
import styles from "./FormButton.module.css";

class FormButton extends Component {
  render() {
    return (
      <button {...this.props.args} className={styles.btn}>
        {this.props.label}
      </button>
    );
  }
}

export default FormButton;
