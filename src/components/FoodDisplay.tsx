"use client"; // Ensure this is a Client Component

import React, { useContext } from "react";
import { StoreContext } from "@/context/StoreContext"; // Ensure this context includes the food_list
import FoodItem from "./FoodItem";
import { food_list } from "../assets"; // Import the food_list

// Define the expected context type
interface StoreContextType {
  food_list: typeof food_list; // Use the same type as your food_list
}

const FoodDisplay: React.FC<{ category: string }> = ({ category }) => {
  // Get the StoreContext and assert its type
  const storeContext = useContext(StoreContext) as StoreContextType | null;

  // Check if storeContext is null
  if (!storeContext) {
    return <p>Loading...</p>; // Handle loading or absence of context
  }

  const { food_list } = storeContext;

  return (
    <div className="food-display" id="food-display">
      <h2>TOP DISHES NEAR YOU</h2>
      <div className="food-display-list">
        {food_list.length > 0 ? (
          food_list.map((item) => (
            <FoodItem
              key={item._id} // Use a unique identifier as the key
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image.src} // This should point to the imported image
            />
          ))
        ) : (
          <p>No food items available.</p> // Fallback if food_list is empty
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
