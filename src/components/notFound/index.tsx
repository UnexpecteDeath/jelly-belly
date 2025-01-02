import styles from './index.module.css'
import sadBob from '../../images/sad-bean.png'
import { Link } from 'react-router-dom'

export default function NotFound() {

    return (

        <div className={styles.NotFound}>
            <h1>Not Found</h1>
            <img src={sadBob} alt='Sad Bob:('></img>
            <Link to={`/`}><p>⊲</p>Go Home</Link>
        </div>
    )
}