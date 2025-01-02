import { useEffect } from 'react';
import { fetchHistory } from '../../api/history';
import { RootState, useAppDispatch } from '../../redux/store'
import styles from './index.module.css'
import { useSelector } from 'react-redux';
import happyBob from '../../images/happy-bean.png'

import Loader from '../../components/loader/Index';
import HistoryCard from '../../components/historyCard';

export default function History() {

    const dispatch = useAppDispatch();
    const {data, status, error, currentPage, totalPage } = useSelector((state: RootState) => { return state.history })
    useEffect(() => {
        dispatch(fetchHistory(currentPage))
    }, [currentPage])



    return (
        <>
            {status === 'pending' && data.length === 0 ? <Loader /> :<h1>Explore History ...</h1>}
            {data.length > 0 && <div className={styles.container }>
                {data.map((history) => {
                    return <HistoryCard history={history} key={`historyKey=${history.mileStoneId}`}/>
                })}
                <img src={happyBob} className={styles.happyBob} alt='happy-Bob'></img>
            </div>}
        </>
    )
}