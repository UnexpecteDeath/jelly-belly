import styles from "./index.module.css";
import bob from "../../images/happy-bean.png";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { fetchFacts } from "../../api/facts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FactCard from "../../components/factCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/Index";
import { incPageFacts } from "../../redux/factsSlice";
import Error from "../../components/error";

export default function Facts() {
  const dispatch = useAppDispatch();
  const { status, totalPage, currentPage, error, data } = useSelector(
    (state: RootState) => {
        return state.facts
    }
  );

  useEffect(() => {
    dispatch(fetchFacts(currentPage));
  }, [currentPage]);

  const loadMore = () => {
    dispatch(incPageFacts(currentPage + 1))
  }

  return (
    <>
      {status === 'pending' && data.length === 0 ? <Loader /> : <h1>Explore All Facts ...</h1>}
       {data.length > 0 ?
       <InfiniteScroll next={loadMore}
        hasMore={currentPage < totalPage}
        loader={<Loader />}
        dataLength={data.length}
        className={styles.container}>
        <img src={bob} alt=""></img>
        {data.map((fact) => (
            <FactCard fact={ fact } key={`fact_key=${fact.factId}`}/>
        ))}
        </InfiniteScroll> : ''}
        {error && <Error />}
    </>
  );
}
