import React, {useState, useEffect} from 'react';
import MealList from './components/MealList';
import './App.css';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const [searchData, setSearchData] = useState(null);
  const [term, setTerm] = useState('meal');

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=acaba579520543978d3f9d612722d9a6&timeFrame=day&targetCalories=${calories}`
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

  // get random meals

  // function getSearchData() {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/search?apiKey=${process.env.RECIPE_API_KEY}&number=10&diet=vegetarian&query=${term}`
  //   )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setSearchData(data)
  //     console.log(data);
  //   })
  //   .catch(() => {
  //     console.log('error');
  //   })
  // }

  useEffect(() => {
    const fetchRec = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=acaba579520543978d3f9d612722d9a6&number=10&diet=vegetarian&query=${term}`)

        const recipes = await res.json()
        console.log(recipes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRec()
  }, [])

  return (
    <div className="App">
      <h1>Recipe app</h1>
      <input type="number" placeholder="Calories (e.g 2000)" onChange={handleChange}/>
      <button onClick={getMealData}>Get daily meal</button>

      <input placeholder="Search by name" onChange={handleSearch}/>
      {/* <button onClick={getSearchData}>Search meal</button> */}

      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
