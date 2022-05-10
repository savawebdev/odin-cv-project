import { Component } from "react";
import styles from "./PreviewInfo.module.css";

class PreviewInfo extends Component {
  render() {
    return <p className={styles["preview-info"]}>{this.props.info}</p>;
  }
}

export default PreviewInfo;
