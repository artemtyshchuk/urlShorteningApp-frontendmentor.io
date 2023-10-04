import { useAppDispatch, useAppSelector } from "redux-hooks";
import styles from "./Header.module.scss";
import { ReactComponent as LogoImage } from "assets/images/logo.svg";
import { openModal } from "features/modal-slice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const handleModalWindow = () => {
    dispatch(openModal(modal === "close" ? "open" : "close"));
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.left}>
            <LogoImage className={styles.logo} />
            <p className={styles.headerButtons} onClick={handleModalWindow}>
              Features
            </p>
            <p className={styles.headerButtons} onClick={handleModalWindow}>
              Pricing
            </p>
            <p className={styles.headerButtons} onClick={handleModalWindow}>
              Resources
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.headerButtons} onClick={handleModalWindow}>
              Login
            </p>
            <button className={styles.signUpButton} onClick={handleModalWindow}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
