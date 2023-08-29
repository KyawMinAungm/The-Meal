import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {GrYoutube } from 'react-icons/gr'
const Detail = () => {
    const {id} = useParams()
    useEffect(() => {
      fetchDetail()
    }, [])
    
    const [detail, setDetail] = useState({})
    const fetchDetail = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json()
        setDetail(meals[0])
        

    }
  return (
    <div className='flex gap-10 w-[80%] mx-auto '>
      <img src={detail.strMealThumb} alt="" className='w-[50%] rounded object-contain object-top'/>
      <div className=" bg-yellow-100 p-5 rounded text-gray-700">
      <h2 className="text-2xl font-bold mb-2">{detail.strMeal}</h2>
      <h2 className=" bg-orange-800 mb-2 inline-block px-2 rounded text-white">{detail.strArea}</h2>
      <h2 className="text-xl  font-semibold text-orange-800">{detail.strCategory}</h2>
      <p className=" mt-4">{detail.strInstructions}</p>
      
      <a href={detail.strYoutube} className=" mt-4"><GrYoutube className='text-3xl text-red-500'/></a>
      
      </div>

    </div>
  )
}

export default Detail
