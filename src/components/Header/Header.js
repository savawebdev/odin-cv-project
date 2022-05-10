import { Component } from "react";
import Title from "./Title/Title";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Title />
      </header>
    );
  }
}

export default Header;
