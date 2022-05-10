import { Component } from "react";
import styles from "./PersonalWrapper.module.css";

class PersonalWrapper extends Component {
  render() {
    return (
      <div className={styles["personal-preview"]}>{this.props.children}</div>
    );
  }
}

export default PersonalWrapper;
