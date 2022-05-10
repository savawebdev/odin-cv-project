import { Component } from "react";
import styles from "./PersonalAddress.module.css";

class PersonalAddress extends Component {
  render() {
    return (
      <small className={styles["personal-address"]}>{this.props.address}</small>
    );
  }
}

export default PersonalAddress;
