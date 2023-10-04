import styles from "./PromoBlock.module.scss";

interface PromoBlockProps {}

export const PromoBlock = ({}: PromoBlockProps) => {
  return (
    <div className={styles.promoBlock}>
      <div className="container">
        <p className={styles.promoBlockTitle}>Boost your links today</p>
        <div className={styles.centerButton}>
          <button className={styles.promoBlockButton}>Get Started</button>
        </div>
      </div>
    </div>
  );
};
