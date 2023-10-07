import styles from "./UrlBlock.module.scss";
import { useRef } from "react";

interface UrlBlockProps {
  handleClick: (text: string) => void;
}

export const UrlBlock = ({ handleClick }: UrlBlockProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

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
              ref={inputRef}
            />
            <button onClick={onClick} className={styles.urlBlockButton}>
              Shorten It!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
