import { Component } from "react";
import styles from "./FormSectionTitle.module.css";

class FormSectionTitle extends Component {
  render() {
    return <h2 className={styles.title}>{this.props.title}</h2>;
  }
}

export default FormSectionTitle;
