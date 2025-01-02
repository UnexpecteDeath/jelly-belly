import Review from '../../components/review'
import arrow from '../../images/arrow-sm-right-svgrepo-com.svg'
import { RootState, useAppDispatch } from '../../redux/store'
import { useEffect, useState } from 'react'
import { fetchRewiews } from '../../api/reviews'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader/Index'
import Error from '../../components/error'
import { incPageRewiews } from '../../redux/rewiewsSlice'
import styles from './index.module.css'

export default function Reviews() {

    const dispatch = useAppDispatch();
    const { data, status, error, totalPage, currentPage } = useSelector((state: RootState) => { return state.rewiews})
    const [ colapse, setColapse ] = useState(false)
    useEffect(() => {
        dispatch(fetchRewiews(currentPage))
    }, [currentPage])


    const loadMoreReview = () => {
        setColapse(false)
        if(currentPage === totalPage) return;
        dispatch(incPageRewiews(currentPage + 1))
    }

    const collapseReview = () => {
        setColapse(true)
    }
    return(
        <>
        <h1>Reviews...</h1>
       <section className={styles.sectionRewiew}>
        {status === 'pending' && data.length === 0 && <Loader />}
            {data.length > 0 ?
            <>
            <div className={!colapse ? styles.rewiewCont : `${styles.rewiewCont} ${styles.colapsed}` }>
                {data.map((review) => {
                    return <Review review={ review } key={`rewiewkey=${review.reviewId}`}/>
                })}
            </div>
           <div className={ styles.contButtonRewiew }>
            {totalPage !== currentPage || colapse ?
            <button className={styles.moreRewiewBtn } onClick={loadMoreReview} >
                Load More
                <img src={arrow} alt='more rewiew button'></img>
            </button>
            :
            <button className={styles.collapseRewiewBtn } onClick={collapseReview} >
                Collapse
                <img src={arrow} alt='colapse rewiew button'></img>
            </button>}
           </div>
            </> : null}
            {error && <Error /> }
        </section>
        </>
    )
}