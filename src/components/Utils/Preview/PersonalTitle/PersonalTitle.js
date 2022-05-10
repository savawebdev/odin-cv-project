import { Component } from "react";
import styles from "./PersonalTitle.module.css";

class PersonalTitle extends Component {
  render() {
    return <h2 className={styles.title}>{this.props.title}</h2>;
  }
}

export default PersonalTitle;
