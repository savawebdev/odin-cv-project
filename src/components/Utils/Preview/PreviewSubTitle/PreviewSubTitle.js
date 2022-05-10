import { Component } from "react";
import styles from "./PreviewSubTitle.module.css";

class PreviewSubTitle extends Component {
  render() {
    return (
      <h3 className={styles["preview-subtitle"]}>
        <span>{this.props.name}</span> - {this.props.city}
      </h3>
    );
  }
}

export default PreviewSubTitle;
