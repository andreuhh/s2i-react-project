import React, { useState, useEffect } from 'react'
import { FaClock, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Meal.scss'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("")

    // key1 = acaba579520543978d3f9d612722d9a6
    // key2 = c08540dcb8804eb08e35916054acf82e

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c08540dcb8804eb08e35916054acf82e&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
                console.log('image', data);
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
