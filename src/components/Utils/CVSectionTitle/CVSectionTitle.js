import { Component } from "react";
import styles from "./CVSectionTitle.module.css";

class FormTitle extends Component {
  render() {
    return <h3 className={styles.title}>{this.props.title}</h3>;
  }
}

export default FormTitle;