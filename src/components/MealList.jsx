import React from 'react'
import Meal from '../components/Meal'

import './MealList.scss'

export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <div>
            {mealData.nutrients &&
                <section className='nutrients'>
                    <h2>Macros</h2>
                    <ul>
                        <li>Calories : <span>{nutrients.calories.toFixed(0)} g</span></li>
                        <li>Carbo : <span>{nutrients.carbohydrates.toFixed(0)} g</span></li>
                        <li>Fat :  <span>{nutrients.fat.toFixed(0)} g</span></li>
                        <li>Protein : <span>{nutrients.protein.toFixed(0)} g</span></li>
                    </ul>
                </section>
            }

            <section className='meals'>
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                })}
            </section>
        </div>
    )
}
