import React from "react";
import {BiSearch} from 'react-icons/bi'
import './Card.css'
import { Link } from "react-router-dom";
const Card = ({ name, img,id }) => {
  return (
    <Link to={`/detail/${id}`}>
    <div className=" relative card">
      <img src={img} alt="" className=" w-72 rounded" />
      <p className=" icon p-5 bg-orange-500 w-12 h-12 rounded-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <BiSearch className=" text-3xl translate-y-[-25%] translate-x-[-25%] text-white "/>
      </p>
    </div>
    </Link>
  );
};

export default Card;
