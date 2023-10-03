import styles from "./Header.module.scss";
import { ReactComponent as LogoImage } from "assets/images/logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.left}>
            <LogoImage className={styles.logo} />
            <p className={styles.headerButtons}>Features</p>
            <p className={styles.headerButtons}>Pricing</p>
            <p className={styles.headerButtons}>Resources</p>
          </div>
          <div className={styles.right}>
            <p className={styles.headerButtons}>Login</p>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
