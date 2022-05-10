import { Component } from "react";
import styles from "./FormWrapper.module.css";

class FormWrapper extends Component {
  render() {
    return <form className={styles.form}>{this.props.children}</form>;
  }
}

export default FormWrapper;
