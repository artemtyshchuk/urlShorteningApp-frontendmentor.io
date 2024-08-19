import { useRef } from "react";
import styles from "./PromoBlock.module.scss";

interface PromoBlockProps {}

export const PromoBlock = ({}: PromoBlockProps) => {
  const urlBlockRef = useRef<null | HTMLDivElement>(null);

  const scrollToUrlBlock = () => {
    if (urlBlockRef.current) {
      urlBlockRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.promoBlock}>
      <div className="container">
        <p className={styles.promoBlockTitle}>Boost your links today</p>
        <div className={styles.centerButton}>
          <button
            onClick={scrollToUrlBlock}
            className={styles.promoBlockButton}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
