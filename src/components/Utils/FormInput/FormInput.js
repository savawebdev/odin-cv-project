import { Component } from "react";
import styles from "./FormInput.module.css";

class FormInput extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        class={styles.input}
      />
    );
  }
}

export default FormInput;
