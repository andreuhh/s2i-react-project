import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch'
import MealList from '../components/MealList/MealList';
import MainResults from '../components/MainResults/MainResults';
import Banner from '../components/Banner/Banner';
import SearchForm from '../components/SearchForm/SearchForm';
import './Home.scss'
import Navbar from '../components/Navbar/Navbar';

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
            `https://api.spoonacular.com/mealplanner/generate?apiKey=acaba579520543978d3f9d612722d9a6&timeFrame=day&diet=vegetarian&targetCalories=${calories}`
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

    // function handleSearch(e) {
    //     setTerm(e.target.value)
    // }

    // key1 = acaba579520543978d3f9d612722d9a6
    // key2 = c08540dcb8804eb08e35916054acf82e

    const { data, isPending, error } = useFetch(`https://api.spoonacular.com/recipes/search?apiKey=acaba579520543978d3f9d612722d9a6&number=4&diet=vegetarian&query=${term}`)
    //console.log(data);

    return (
        <div className="App">
            <Navbar />
            <Banner />
            <SearchForm searchText={(text) => setTerm(text)} />

            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}

            {data?.results && data?.results?.length > 0 && <MainResults mainResults={data?.results} />}
            {data?.results && data?.results?.length === 0 && <div>Nessun risultato per questa ricerca</div>}

            <h2>Search by daily calories</h2>
            <input type="number" placeholder="Search by Calories (e.g 2000)" onChange={handleChange} />
            <button onClick={getMealData}>Search</button>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );
}