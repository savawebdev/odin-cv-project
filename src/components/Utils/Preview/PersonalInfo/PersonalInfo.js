import { Component } from "react";
import styles from "./PersonalInfo.module.css";

class PersonalInfo extends Component {
  render() {
    return (
      <p className={styles["personal-info"]}>
        <span>{this.props.label}:</span> {this.props.info}
      </p>
    );
  }
}

export default PersonalInfo;
