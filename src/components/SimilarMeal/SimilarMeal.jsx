import { useFetch } from '../../hooks/useFetch'
import Meal from '../Meal/Meal';

export default function SimilarMeal({ id }) {

    const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=c08540dcb8804eb08e35916054acf82e`
    const { data: recipe, isPending, error } = useFetch(url)

    return (
        <>
            <h4>Similar recipes</h4>
            <section className='contResults'>
                {recipe && recipe?.map((meal, i) => {
                    if (i < 4) {
                        return (
                            <Meal key={meal.id} meal={meal} />
                        )
                    }
                })}
            </section>
        </>
    )
}
