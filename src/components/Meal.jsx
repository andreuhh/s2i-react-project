import React, { useState, useEffect } from 'react'

import { FaClock, FaUtensils } from 'react-icons/fa'

import './Meal.scss'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=acaba579520543978d3f9d612722d9a6&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, [meal.id]);

    return (
        <article>
            <div className="cover" style={{ height: 280, backgroundImage: `url(${imageUrl})`, borderRadius: 20 }}></div>
            <div className="info">
                <h1>{meal.title}</h1>

                <ul>
                    <li><span><FaClock /></span> Preparation: {meal.readyInMinutes} min</li>
                    <li><span><FaUtensils /></span>Servings: {meal.servings}</li>
                </ul>
                {/* <a>Go to recipe</a> */}
            </div>
        </article>
    )
}
