import React, { useState } from "react";
import { GiMeal } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submithandeler = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
    
  };
  return (
    <Link to={"/"}>
      <div className=" flex  justify-around p-3 mb-5 rounded border-b-2">
        <GiMeal className=" text-4xl text-orange-400" />
        <form onSubmit={submithandeler}>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className=" bg-orange-200 rounded outline-none p-1 border-2 border-orange-400"
          />
        </form>
      </div>
    </Link>
  );
};

export default Navbar;
