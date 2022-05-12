import styles from "./PersonalAddress.module.css";

const PersonalAddress = (props) => (
  <small className={styles["personal-address"]}>{props.address}</small>
);

export default PersonalAddress;
