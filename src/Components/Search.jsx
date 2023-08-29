import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const Search = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    useEffect(() => {
      fetchByName()
    }, [])
    const fetchByName = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      const {meals} = await api.json()
      setMeals(meals)
      
    }

  return (
    <div className=' flex flex-wrap gap-10 justify-center'>
        
      {meals.map((meal) => (
        <Card key={meal.idMeal} name = {meal.strMeal} img = {meal.strMealThumb} id ={meal.idMeal}/>
      ))}
      
    </div>
  )
}

export default Search
