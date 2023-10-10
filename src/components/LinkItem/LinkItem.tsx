import { useState } from "react";
import styles from "./LinkItem.module.scss";
import { Link } from "types";

interface LinkItemProps extends Link {
  removeLink: (result: Link["result"]["code"]) => void;
}

export const LinkItem = ({ result, removeLink }: LinkItemProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.short_link);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div className={styles.linkItem}>
      <div className="container">
        <div className={styles.text}>
          <p className={styles.link}>{result.original_link}</p>
          <div className={styles.resultWrapper}>
            <p className={styles.result}>{result.short_link}</p>
            <button
              className={styles.copyButton}
              onClick={copyTextToClipboard}
              disabled={isCopied}
            >
              {" "}
              {isCopied ? "Copied!" : "Copy"}
            </button>
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
