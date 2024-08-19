import { useAppDispatch, useAppSelector } from "redux-hooks";
import styles from "./Header.module.scss";
import { ReactComponent as LogoImage } from "assets/images/logo.svg";
import { ReactComponent as HamburgerIcon } from "assets/images/burger-menu-svgrepo-com.svg";
import { openModal } from "features/modal-slice";
import { useState } from "react";
import { MenuComponent } from "components/MenuComponent";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const handleHumburgerMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleModalWindow = () => {
    dispatch(openModal(modal === "close" ? "open" : "close"));
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.left}>
            <LogoImage className={styles.logo} />
            <div className={styles.headerButtonsContainer}>
              <HamburgerIcon
                className={styles.hamburger}
                onClick={handleHumburgerMenu}
              />

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
        {openMenu && <MenuComponent />}
      </div>
    </div>
  );
};
