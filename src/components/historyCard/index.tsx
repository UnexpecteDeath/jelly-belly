import styles from "./index.module.css";
import arrow from '../../images/arrow-sm-right-svgrepo-com.svg'
import { History } from "../../types";

type Props = {
    history: History
}

export default function HistoryCard({history}: Props ) {
  return (
    <div className={styles.historyCard}>
      <div>
        <h3>{history.year}</h3>
        <p>{history.description}</p>
      </div>
      <img src={arrow} alt="" className={styles.arrow}></img>
    </div>
  );
}
