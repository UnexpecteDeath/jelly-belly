import { Dispatch, FC } from "react";
import styles from "./index.module.css";

type Props = {
  isOpen: boolean,
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenu:FC<Props> = ({ isOpen, setIsOpen }) => {



  return (
    <div className={styles.container} onClick={()=>setIsOpen(!isOpen)}>
      <input type="checkbox" checked={isOpen}/>
      <div className={styles.hamburger_lines}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </div>
  );
};
