import { Component } from "react";
import styles from "./SectionTitle.module.css";

class SectionTitle extends Component {
  render() {
    return <h2 className={styles.title}>{this.props.title}</h2>;
  }
}

export default SectionTitle;
