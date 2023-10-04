import styles from "./Footer.module.scss";
import { ReactComponent as LogoImage } from "assets/images/logo-white.svg";
import { ReactComponent as FacebookIcon } from "assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "assets/images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icon-twitter.svg";
import { useAppDispatch, useAppSelector } from "redux-hooks";
import { openModal } from "features/modal-slice";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const handleModalWindow = () => {
    dispatch(openModal(modal === "close" ? "open" : "close"));
  };

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <LogoImage className={styles.logoImage} />
          <div className={styles.extraInfoWrapper}>
            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Features</p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Link Shortening
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Branded Links
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Analytics
              </p>
            </div>

            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Resources</p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Blog
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Developers
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Support
              </p>
            </div>

            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Company</p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                About
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Our Team
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Careers
              </p>
              <p className={styles.regularButton} onClick={handleModalWindow}>
                Contact
              </p>
            </div>
          </div>
          <div className={styles.iconsWrapper}>
            <FacebookIcon
              className={styles.footerIcon}
              onClick={handleModalWindow}
            />
            <TwitterIcon
              className={styles.footerIcon}
              onClick={handleModalWindow}
            />
            <PinterestIcon
              className={styles.footerIcon}
              onClick={handleModalWindow}
            />
            <InstagramIcon
              className={styles.footerIcon}
              onClick={handleModalWindow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
