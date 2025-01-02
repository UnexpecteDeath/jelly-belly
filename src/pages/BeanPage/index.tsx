import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchBean } from "../../api/Bean";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Index";
import styles from "./index.module.css";
import Error from "../../components/error";

export default function Bean() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.bean);

  console.log(data);
  useEffect(() => {
    if (params.id) {
      dispatch(fetchBean(params.id));
    }
  }, [params]);
  return (
    <div className={styles.container}>
      {status === "pending" ? <Loader /> : <h1>Explore one Bean...</h1>}
      {status === "fulfilled" ? (
        <>
          <div className={styles.containerButton}>
            <Link
              to={
                Number(params.id) === 1
                  ? `/bean/${params.id}`
                  : `/bean/${Number(params.id) - 1}`
              }
            >
              <p>⊲</p> previous bean
            </Link>
            <Link to={`/bean/${Number(params.id) + 1}`}>
              next bean <p>⊳</p>
            </Link>
          </div>
          <div
            className={styles.BeanPage}
            style={{ backgroundColor: `${data?.backgroundColor}` }}
          >
            <img src={data?.imageUrl} alt={data?.flavorName}></img>
            <div className={styles.descripBean}>
              <h1>{data?.flavorName}</h1>
              <h3>{data?.description}</h3>
              <p>{data?.ingredients}</p>
              <p>{data?.glutenFree ? "Gluten Free" : "With Gluten"}</p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {status === "rejected" && error && <Error />}
    </div>
  );
}
