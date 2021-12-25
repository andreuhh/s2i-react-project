import { useParams } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import SimilarMeal from '../components/SimilarMeal/SimilarMeal'
import { useFetch } from '../hooks/useFetch'
import { FaClock, FaUtensils, FaLeaf, FaSeedling, FaHeart, FaDollarSign } from 'react-icons/fa'

import './Detail.scss'

export default function Detail() {

    const { id } = useParams()
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=acaba579520543978d3f9d612722d9a6&includeNutrition=false`
    const { data: recipe, isPending, error } = useFetch(url)
    console.log('single recipe', recipe);

    return (
        <div className="App detail">
            <Navbar />
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}

            {recipe && <div>

                <div className="detail__hero" style={{ height: 450, backgroundImage: `url(${recipe?.image})`, borderRadius: 20 }}></div>

                <h1>{recipe?.title}</h1>

                <ul className="detail__info">
                    <li><span><FaClock /></span> Preparation: {recipe.readyInMinutes} min</li>
                    <li><span><FaUtensils /></span>Servings: {recipe.servings}</li>
                    {recipe.vegetarian && <li><span><FaLeaf /></span>Vegetarian</li>}
                    {recipe.vegan && <li><span><FaSeedling /></span>Vegan</li>}
                    {recipe.veryPopular && <li><span><FaHeart /></span>Very Popular</li>}
                    {recipe.pricePerServing && <li><span><FaDollarSign /></span>{recipe.pricePerServing / 100}</li>}
                </ul>

                <h4>Summary</h4>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

                {recipe.analyzedInstructions && <div>
                    <h4>Instructions</h4>
                    <ul>
                        {recipe.analyzedInstructions[0].steps.map((step) => {
                            return (
                                <li key={step.step}>- {step.step}</li>
                            )
                        })}
                    </ul>

                </div>}


                <SimilarMeal id={recipe.id} />
            </div>
            }
        </div>
    )
}
