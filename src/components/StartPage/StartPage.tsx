import styles from "./StartPage.module.scss";
import { ReactComponent as IllustrationWorking } from "assets/images/illustration-working.svg";

export const StartPage = () => {
  return (
    <div className={styles.startPage}>
      <div className="container">
        <div className={styles.startPageWrapper}>
          <p className={styles.title}>More than just shorter links</p>
          <p className={styles.subtitle}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className={styles.startPageButton}>Get Started</button>
          <IllustrationWorking className={styles.startPageImage} />
        </div>
      </div>
    </div>
  );
};
