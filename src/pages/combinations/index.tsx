import styles from './index.module.css';
import bob from "../../images/happy-bean.png"
import { RootState, useAppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { fetchCombinations } from '../../api/combinations';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/Index';
import InfiniteScroll from 'react-infinite-scroll-component';
import { incPageCombinations } from '../../redux/combinationsSlice';
import Error from '../../components/error';

export default function Combinations() {

    const dispatch = useAppDispatch();
    const {data, status, currentPage, totalPage, error } = useSelector((state: RootState) => { return state.combinations})
    useEffect(() => {
        dispatch(fetchCombinations(currentPage))
    }, [currentPage])

    console.log(data)

    const loadMore = () => {
        dispatch(incPageCombinations(currentPage + 1))
    }

    return(
        <>
        {status === 'pending' && data.length === 0 ? <Loader /> : <h1>Explore Combinations ...</h1>}
        {data.length > 0 &&
                <InfiniteScroll hasMore={currentPage < totalPage} next={loadMore} dataLength = {data.length} loader={<Loader />} className={styles.container}>
                <img src={ bob } alt='happy-bean'></img>
                {data.map((comb) => {
                    return (
                    <div className={styles.combCard} key={`combination-key=${comb.combinationId}`}>
                        <h3>{comb.name}</h3>
                        <p>{comb.tag.join(' ')}</p>
                    </div>
                    )
                })}
            </InfiniteScroll>}
        {error && <Error />}
        </>
    )
}