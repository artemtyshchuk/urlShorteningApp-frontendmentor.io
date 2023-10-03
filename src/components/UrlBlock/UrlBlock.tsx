import styles from "./UrlBlock.module.scss";

interface UrlBlockProps {}

export const UrlBlock = ({}: UrlBlockProps) => {
  return (
    <div className={styles.urlBlock}>
      <div className="container">
        <div className={styles.urlBlockWrapper}>
          <form autoComplete="off">
            <input
              type="text"
              className={styles.textField}
              id="url"
              name="url"
              placeholder="Shorten a link here..."
            />
            <button className={styles.urlBlockButton}>Shorten It!</button>
          </form>
        </div>
      </div>
    </div>
  );
};
