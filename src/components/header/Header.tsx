import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <p className={styles[""]}>{"foodapp"}</p>
      <p>
        <span>Login</span>
      </p>
    </div>
  );
};

export default Header;
