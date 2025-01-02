import { Fact } from "../../types";
import styles from "./index.module.css"

type Props = {
    fact: Fact
}

export default function FactCard({fact}:Props) {

    return (
        <div className={styles.fact}>
        <h3>{fact.title}</h3>
        <p>{fact.description}</p>
      </div>
    );
}