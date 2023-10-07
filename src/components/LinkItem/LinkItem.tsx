import { useAppDispatch } from "redux-hooks";
import styles from "./LinkItem.module.scss";
import { removeLink } from "features/link/link-slice";
import { Link } from "types";

interface LinkItemProps extends Link {
  removeLink: (result: Link["result"]) => void;
}

export const LinkItem = ({ result }: LinkItemProps) => {
  const dispatch = useAppDispatch();

  // const handleRemoveLink = () => {
  //   dispatch(removeLink(result.code));
  // };

  return (
    <div className={styles.linkItem}>
      <div className="container">
        <div className={styles.text}>
          <p className={styles.link}>{result.originalLink}</p>
          <div className={styles.resultWrapper}>
            <p className={styles.result}>{result.shortLink}</p>
            <button className={styles.copyButton}>Copy</button>
          </div>
          <span
            className={styles.closeButton}
            onClick={() => removeLink(result.code)}
          ></span>
        </div>
      </div>
    </div>
  );
};
