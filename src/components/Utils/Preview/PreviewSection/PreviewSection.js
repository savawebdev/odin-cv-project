import { Component } from "react";
import styles from "./PreviewSection.module.css";

class PreviewSection extends Component {
  render() {
    return (
      <div className={styles["preview-section"]}>{this.props.children}</div>
    );
  }
}

export default PreviewSection;
