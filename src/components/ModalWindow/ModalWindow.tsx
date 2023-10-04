import { useAppDispatch, useAppSelector } from "redux-hooks";
import styles from "./ModalWindow.module.scss";
import { closeModal } from "features/modal-slice";

interface ModalWindowProps {}

export const ModalWindow = ({}: ModalWindowProps) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const handleModalWindow = () => {
    dispatch(closeModal(modal === "open" ? "close" : "open"));
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowWrapper}>
        <p className={styles.descr}>
          This is a one-pager website with a URL shortening feature made for
          Frontend Mentor challenge.
        </p>
        <button
          className={styles.modalWindowButton}
          onClick={handleModalWindow}
        >
          Close
        </button>
        <div className={styles.closeButtonWrapper} onClick={handleModalWindow}>
          <span className={styles.closeButton}></span>
        </div>
      </div>
    </div>
  );
};
