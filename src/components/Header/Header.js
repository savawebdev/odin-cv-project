import Title from "./Title/Title";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Title />
    </header>
  );
};

export default Header;
