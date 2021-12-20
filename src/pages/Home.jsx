import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch'
import MealList from '../components/MealList';
import MainResults from '../components/MainResults';
import './Home.scss'

export default function Home() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    const [searchData, setSearchData] = useState(null);
    const [term, setTerm] = useState('meal');

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=c08540dcb8804eb08e35916054acf82e&timeFrame=day&diet=vegetarian&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data)
                console.log(data);
            })
            .catch(() => {
                console.log('error');
            })
    }

    function handleSearch(e) {
        setTerm(e.target.value)
    }

    // key1 = acaba579520543978d3f9d612722d9a6
    // key2 = c08540dcb8804eb08e35916054acf82e

    const { data, isPending, error } = useFetch(`https://api.spoonacular.com/recipes/search?apiKey=c08540dcb8804eb08e35916054acf82e&number=4&diet=vegetarian&query=${term}`)
    console.log(data);

    return (
        <div className="App">
            <h1>Recipe app</h1>

            <input placeholder="Search by name" onChange={handleSearch} />

            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}

            {data?.results && data?.results?.length > 0 && <MainResults mainResults={data?.results} />}
            {data?.results && data?.results?.length === 0 && <div>Nessun risultato per questa ricerca</div>}


            { /* SEARCH BY DAILY CALORIES */}
            <input type="number" placeholder="Calories (e.g 2000)" onChange={handleChange} />
            <button onClick={getMealData}>Get daily meal</button>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );
}