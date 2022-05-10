import { Component } from "react";
import styles from "./FormLabel.module.css";

class FormLabel extends Component {
  render() {
    return (
      <label htmlFor={this.props.htmlFor} className={styles.label}>
        {this.props.labelName}
      </label>
    );
  }
}

export default FormLabel;
