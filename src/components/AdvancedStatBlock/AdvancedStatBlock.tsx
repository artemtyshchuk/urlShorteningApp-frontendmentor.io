import styles from "./AdvancedStatBlock.module.scss";
import { ReactComponent as BrandRecognitionIcon } from "assets/images/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecordsIcon } from "assets/images/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizableIcon } from "assets/images/icon-fully-customizable.svg";

interface AdvancedStatBlockProps {}

export const AdvancedStatBlock = ({}: AdvancedStatBlockProps) => {
  return (
    <div className={styles.advancedStatBlock}>
      <div className="container">
        <p className={styles.title}>Advanced Statistics</p>
        <p className={styles.subtitle}>
          Track how your links are performing across the web with
          <br />
          our advanced statistics dashboard.
        </p>

        <div className={styles.advancedStatBlockWrapper}>
          <span className={styles.line}></span>
          <div className={styles.extraBlock}>
            <div className={styles.circleWithIcon}>
              <BrandRecognitionIcon className={styles.circleIcon} />
            </div>
            <p className={styles.extraBlockTitle}>Brand Recognition</p>
            <p className={styles.extraBlockDescr}>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className={styles.extraBlock} style={{ marginTop: "144px" }}>
            <div className={styles.circleWithIcon}>
              <DetailedRecordsIcon className={styles.circleIcon} />
            </div>
            <p className={styles.extraBlockTitle}>Detailed Records</p>
            <p className={styles.extraBlockDescr}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className={styles.extraBlock} style={{ marginTop: "188px" }}>
            <div className={styles.circleWithIcon}>
              <FullyCustomizableIcon className={styles.circleIcon} />
            </div>
            <p className={styles.extraBlockTitle}>Fully Customizable</p>
            <p className={styles.extraBlockDescr}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
