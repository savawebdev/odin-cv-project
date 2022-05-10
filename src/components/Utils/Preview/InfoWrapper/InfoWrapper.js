import { Component } from "react";
import styles from "./InfoWrapper.module.css";

class InfoWrapper extends Component {
  render() {
    return (
      <div {...this.props.args} className={styles["info-wrapper"]}>
        {this.props.children}
      </div>
    );
  }
}

export default InfoWrapper;
