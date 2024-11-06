"use client"

import React, { useState } from "react";
import "./style.css";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header";
import ExploreMenu from "@/components/ExploreMenu";
import FoodItem from "@/components/FoodItem";
import FoodDisplay from "@/components/FoodDisplay";


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