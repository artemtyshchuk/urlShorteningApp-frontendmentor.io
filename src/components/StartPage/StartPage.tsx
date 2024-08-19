import { useRef } from "react";
import styles from "./StartPage.module.scss";
import { ReactComponent as IllustrationWorking } from "assets/images/illustration-working.svg";

export const StartPage = () => {
  const urlBlockRef = useRef<null | HTMLDivElement>(null);

  const scrollToUrlBlock = () => {
    if (urlBlockRef.current) {
      urlBlockRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.startPage}>
      <div className="container">
        <div className={styles.startPageWrapper}>
          <p className={styles.title}>More than just shorter links</p>
          <p className={styles.subtitle}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button onClick={scrollToUrlBlock} className={styles.startPageButton}>
            Get Started
          </button>
          <IllustrationWorking className={styles.startPageImage} />

          <div ref={urlBlockRef}></div>
        </div>
      </div>
    </div>
  );
};
