import { Link } from "react-router-dom";
import styles from './index.module.css'
import sadBob from '../../images/sad-bean.png'

export default function Error() {

    return (
        <div className={styles.Error}>
        <h1>Error...</h1>
        <img src={sadBob} alt='Sad Bob:('></img>
        <Link to={`/`}><p>⊲</p>Go Home</Link>
        </div>
    );
}