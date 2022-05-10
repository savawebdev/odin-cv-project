import { Component } from "react";
import styles from "./FormControl.module.css";

class FormControl extends Component {
  render() {
    return <div className={styles["form-control"]}>{this.props.children}</div>;
  }
}

export default FormControl;
