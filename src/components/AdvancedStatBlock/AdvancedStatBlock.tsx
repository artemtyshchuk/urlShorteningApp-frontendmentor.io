import styles from "./AdvancedStatBlock.module.scss";
import { ReactComponent as BrandRecognitionIcon } from "assets/images/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecordsIcon } from "assets/images/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizableIcon } from "assets/images/icon-fully-customizable.svg";
import { motion } from "framer-motion";

export const AdvancedStatBlock = () => {
  const topAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const animation = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.advancedStatBlock}
    >
      <div className="container">
        <motion.p custom={1} variants={topAnimation} className={styles.title}>
          Advanced Statistics
        </motion.p>
        <motion.p
          custom={1}
          variants={topAnimation}
          className={styles.subtitle}
        >
          Track how your links are performing across the web with
          <br />
          our advanced statistics dashboard.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.advancedStatBlockWrapper}
          custom={2}
          variants={topAnimation}
        >
          <motion.span
            className={styles.line}
            custom={5}
            variants={animation}
          ></motion.span>
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

          <motion.div
            className={styles.extraBlock}
            style={{ marginTop: "144px" }}
            custom={3}
            variants={topAnimation}
          >
            <div className={styles.circleWithIcon}>
              <DetailedRecordsIcon className={styles.circleIcon} />
            </div>
            <p className={styles.extraBlockTitle}>Detailed Records</p>
            <p className={styles.extraBlockDescr}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </motion.div>

          <motion.div
            className={styles.extraBlock}
            style={{ marginTop: "188px" }}
            custom={4}
            variants={topAnimation}
          >
            <div className={styles.circleWithIcon}>
              <FullyCustomizableIcon className={styles.circleIcon} />
            </div>
            <p className={styles.extraBlockTitle}>Fully Customizable</p>
            <p className={styles.extraBlockDescr}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
