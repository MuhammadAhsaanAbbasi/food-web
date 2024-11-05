"use client"

import React, { useState } from "react";
import './/style.css';
import Navbar from "./commponents/Navbar/Navbar";
import Header from "./commponents/Header";
import ExploreMenu from "./commponents/ExploreMenu";
import FoodItem from "./commponents/FoodItem";
import FoodDisplay from "./commponents/FoodDisplay";


export default function Home() {

const [category,setCategory]=useState("All");


  return (
    <div  className="app">
      
      <Navbar/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={""}/>
      <FoodItem id={""} name={""} price={0} description={""} image={""}/>
      
 
      
      
      
    
    </div>
  );
}  