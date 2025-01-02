import { Link } from 'react-router-dom'
import { Bean } from '../../types'
import styles from './index.module.css'


type Props = {
    data: Bean,
}

export default function BeenCard({ data }: Props) {

    return (
        <Link to={`/bean/${data.beanId}`} className={ styles.card } style={{background: data.backgroundColor}}>
            <img src={data.imageUrl} alt={data.flavorName}></img>
            <h3 className={ styles.name }>{data.flavorName}</h3>
            <p className={ styles.discrib }>{data.description}</p>
        </Link>
    )
}