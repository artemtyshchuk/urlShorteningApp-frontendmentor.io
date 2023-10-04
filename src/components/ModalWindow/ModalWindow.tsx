import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {}

export const ModalWindow = ({}: ModalWindowProps) => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowWrapper}>
        <p className={styles.descr}>
          This is a one-pager website with a URL shortening feature made for
          Frontend Mentor challenge.
        </p>
        <button className={styles.modalWindowButton}>Close</button>
        <div className={styles.closeButtonWrapper}>
          <span className={styles.closeButton}></span>
        </div>
      </div>
    </div>
  );
};
