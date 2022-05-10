import { Component } from "react";
import styles from "./PreviewDate.module.css";

class PreviewDate extends Component {
  render() {
    return (
      <small className={styles["preview-date"]}>
        {this.props.startDate} - {this.props.endDate}
      </small>
    );
  }
}

export default PreviewDate;
