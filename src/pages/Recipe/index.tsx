import { Link, useParams } from "react-router-dom"
import styles from './index.module.css'
import { RootState, useAppDispatch } from "../../redux/store"
import { useEffect } from "react";
import { fetchRecipe } from "../../api/recipe";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Index";
import Error from "../../components/error";

export default function Recipe() {

    const params = useParams()
    const dispatch = useAppDispatch();
    const {data, status, error } = useSelector((state: RootState) => { return state.recipe })
    useEffect(() => {
        if(params.id) {
            dispatch(fetchRecipe(params.id))
        }
    }, [params])
    return (
        <>
        {status === 'pending' && <Loader />}
        {status === 'fulfilled' && <div className={styles.recipeCard}>
            <h2>{data?.name}</h2>
            <p>{data?.description}</p>
            <div>
                {data?.prepTime && <p>Preparation time: {data?.prepTime}</p>}
                {data?.cookTime && <p>Cook time: {data?.cookTime}</p>}
                {data?.totalTime && <p>Total time: {data?.totalTime}</p>}
                <p>Recipe makes {data?.makingAmount}</p>
            </div>
                <img src={data?.imageUrl} alt={data?.name}></img>
                <ul>
                    <h4>Ingredients</h4>
                    {data?.ingredients.map((ing) =>
                    <li key={ing}>{ing}</li>
                    )}
                </ul>
                <ul>
                    <h4>{data?.additions1[0]}</h4>
                    {data?.additions1.slice(1).map((addit) =>
                    <li key={addit}>{addit}</li>
                    )}
                </ul>
                <ul>
                    <h4>{data?.additions2[0]}</h4>
                    {data?.additions2.slice(1).map((addit) =>
                    <li key={addit}>{addit}</li>
                    )}
                </ul>
                <ul>
                    <h4>{data?.additions3[0]}</h4>
                    {data?.additions3.slice(1).map((addit) =>
                    <li key={addit}>{addit}</li>
                    )}
                </ul>
                <h4>Directions</h4>
                <p>{data?.directions}</p>
                {data?.tips.length ? <p>Tips - {data?.tips}</p> : ''}
                <Link to={`/recipies`}><p>⊲</p>Go Recipies</Link>
        </div>}
        {status === 'rejected' && <Error />}
        </>
    )
}