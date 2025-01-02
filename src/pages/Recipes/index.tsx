import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./index.module.css";
import { fetchRecipies } from "../../api/recipies";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Index";
import Error from "../../components/error";
import RecipeCard from "../../components/recipeCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { incPageRecipies } from "../../redux/recipiesSlice";


export default function Recipies() {
  const dispatch = useAppDispatch();
  const { data, status, error, totalPage, currentPage } = useSelector((state: RootState) => {
    return state.recipies;
  });


  useEffect(() => {
    dispatch(fetchRecipies(currentPage));
  }, [currentPage]);


  const loadMore = () => {
    dispatch(incPageRecipies(currentPage + 1))
  }

  return (
    <>
      {status === "pending" && data.length === 0 ? <Loader /> : <h1>Explore Recipes ...</h1>}
      { data.length > 0 &&
      <InfiniteScroll hasMore={currentPage < totalPage} next={loadMore} loader={<Loader />} dataLength={ data.length } className={styles.container}>
          {data.map((recipe) => {
            return <RecipeCard recipe={ recipe } key={`recipe_key=${recipe.recipeId}`} />
          })}
      </InfiniteScroll>}
      {error && <Error />}
    </>
  );
}
