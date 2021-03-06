import React, { useState, useEffect } from 'react'
import { FaClock, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Meal.scss'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=acaba579520543978d3f9d612722d9a6&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("error");
            });
    }, [meal.id]);

    return (
        <article>
            <Link to={`/detail/${meal.id}`}>
                <div className="cover" style={{ height: 280, backgroundImage: `url(${imageUrl})`, borderRadius: 20 }}></div>
                <div className="info">
                    <h1 className='textOneLine'>{meal.title}</h1>

                    <ul>
                        <li><span><FaClock /></span> Preparation: {meal.readyInMinutes} min</li>
                        <li><span><FaUtensils /></span>Servings: {meal.servings}</li>
                    </ul>
                </div>
            </Link>
        </article>
    )
}
