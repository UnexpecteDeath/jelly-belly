import bob from '../../images/happy-bean.png'
import styles from "./index.module.css"


export default function Loader() {

    return (
        <div className={ styles.loader }>
            <h1>Loading...</h1>
            <img  src={ bob } alt=""></img>
        </div>
    )
}