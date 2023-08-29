import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
    
  };

  return (
    <div className=" flex flex-wrap gap-10 justify-center">
      {meals.map((meal) => (
        <Card key={meal.idMeal} name = {meal.strMeal} img = {meal.strMealThumb} id ={meal.idMeal}/>
      ))}
    </div>
  );
};

export default Home;
