import styles from "./Footer.module.scss";
import { ReactComponent as LogoImage } from "assets/images/logo-white.svg";
import { ReactComponent as FacebookIcon } from "assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "assets/images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icon-twitter.svg";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <LogoImage className={styles.logoImage} />
          <div className={styles.extraInfoWrapper}>
            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Features</p>
              <p className={styles.regularButton}>Link Shortening</p>
              <p className={styles.regularButton}>Branded Links</p>
              <p className={styles.regularButton}>Analytics</p>
            </div>

            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Resources</p>
              <p className={styles.regularButton}>Blog</p>
              <p className={styles.regularButton}>Developers</p>
              <p className={styles.regularButton}>Support</p>
            </div>

            <div className={styles.mainWrapper}>
              <p className={styles.mainButton}>Company</p>
              <p className={styles.regularButton}>About</p>
              <p className={styles.regularButton}>Our Team</p>
              <p className={styles.regularButton}>Careers</p>
              <p className={styles.regularButton}>Contact</p>
            </div>
          </div>
          <div className={styles.iconsWrapper}>
            <FacebookIcon className={styles.footerIcon} />
            <TwitterIcon className={styles.footerIcon} />
            <PinterestIcon className={styles.footerIcon} />
            <InstagramIcon className={styles.footerIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
