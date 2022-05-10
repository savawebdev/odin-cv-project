import { Component } from "react";
import styles from "./Section.module.css";

class Section extends Component {
  render() {
    return (
      <section className={styles[this.props.className]}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
