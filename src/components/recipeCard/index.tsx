import { Link } from "react-router-dom";
import { Recipes } from "../../types";
import styles from './index.module.css'

type Props = {
    recipe: Recipes
}

export default function RecipeCard({ recipe }: Props) {

    return (
        <Link to={`/recipe/${recipe.recipeId}`}
              className={styles.recipeCard}
            >
              <img src={recipe.imageUrl} alt=""></img>
              <div>
                <h3>{recipe.name}</h3>
                <p>Preparation time: {recipe?.prepTime}</p>
                <p>Cook time: {recipe?.cookTime}</p>
                <p>Total time: {recipe?.totalTime}</p>
                <p>Recipe makes {recipe?.makingAmount}</p>
              </div>
        </Link>
    )
}