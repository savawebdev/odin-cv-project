import { Component } from "react";
import styles from "./FormWrapper.module.css";

class FormWrapper extends Component {
  render() {
    return (
      <form {...this.props.args} className={styles.form}>
        {this.props.children}
      </form>
    );
  }
}

export default FormWrapper;
