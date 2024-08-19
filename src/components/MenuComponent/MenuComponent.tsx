import { openModal } from "features/modal-slice";
import styles from "./MenuComponent.module.scss";
import { useAppDispatch, useAppSelector } from "redux-hooks";
import { motion } from "framer-motion";

interface MenuComponentProps {}

export const MenuComponent = ({}: MenuComponentProps) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const handleModalWindow = () => {
    dispatch(openModal(modal === "close" ? "open" : "close"));
  };

  const animation = {
    hidden: {
      y: -150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -150,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      transition={{
        delay: 0.2,
      }}
      className={styles.menuComponent}
    >
      <span className={styles.divider}></span>
      <div className={styles.headerButtonsContainer}>
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
      <div className={styles.AuthButtonsContainer}>
        <button className={styles.loginButton} onClick={handleModalWindow}>
          Login
        </button>
        <button className={styles.signUpButton} onClick={handleModalWindow}>
          Sign Up
        </button>
      </div>
    </motion.div>
  );
};
