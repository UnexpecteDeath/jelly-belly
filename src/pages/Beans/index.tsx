import { useEffect } from "react";
import styles from "./index.module.css";
import BeenCard from "../../components/beenCard";
import { fetchBeans } from "../../api/Beans";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import InfiniteScroll from "react-infinite-scroll-component";
import { incPageBeans } from "../../redux/beansSlice";
import Loader from "../../components/loader/Index";
import Error from "../../components/error";

function Beans() {
  const { data, status, error, totalPage, currentPage } = useSelector(
    (state: RootState) => {
      return state.beans;
    }
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBeans(currentPage));
  }, [currentPage]);

  const loadMore = () => {
    dispatch(incPageBeans(currentPage + 1));
  };

  return (
    <div>
      {status === "pending" && data.length === 0 ?
        <Loader />
       :
        <h1>Explore All Beans ...</h1>
      }
      <InfiniteScroll
        next={loadMore}
        hasMore={currentPage < totalPage}
        loader={<Loader />}
        dataLength={data.length}
        className={styles.container}
      >
        {data.map((bean) => {
          return <BeenCard key={bean.beanId} data={bean} />;
        })}
      </InfiniteScroll>
      {error && <Error />}
    </div>
  );
}

export default Beans;
