import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Detail from "./Components/Detail";
import Search from "./Components/Search";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/search/:name" element={<Search/>}/>
      </Routes>
    </>
  );
};

export default App;
