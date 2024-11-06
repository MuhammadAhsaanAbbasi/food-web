import React, { useContext } from 'react';
import Image from 'next/image';
import { StoreContext } from '@/context/StoreContext';

// Define types for the props
interface FoodItemProps {
  id: string | number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Define the expected context type
interface StoreContextType {
  cartItems: Record<string, number>; // Adjust based on your cartItems structure
  addToCart: (itemId: string | number) => void;
  removeFromCart: (itemId: string | number) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ id, name, price, description, image }) => {
  // Use useContext and type assertion
  const storeContext = useContext(StoreContext) as StoreContextType | null;

  // Check if the context is null and return a fallback UI or null if not available
  if (!storeContext) {
    console.error("StoreContext is not available. Make sure StoreContextProvider is wrapping this component.");
    return null;
  }

  const { cartItems, addToCart, removeFromCart } = storeContext;

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <Image
          className='food-item-image'
          src={image}
          alt={name}
          width={200}
          height={200}
          objectFit="cover" // Ensures the image covers the area without stretching
        />
        {!cartItems[id] ? (
          <Image
            className='add'
            onClick={() => addToCart(id)}
            src="/add_icon_white.png"
            alt="Add to cart"
            width={40}
            height={40}
          />
        ) : (
          <div className="food-item-counter">
            <Image
              onClick={() => removeFromCart(id)}
              src="/remove_icon_red.png"
              alt="Remove from cart"
              width={40}
              height={40}
            />
            <p>{cartItems[id]}</p>
            <Image
              onClick={() => addToCart(id)}
              src="/add_icon_green.png"
              alt="Add more"
              width={40}
              height={40}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <Image
            src="/rating_stars.png" // Ensure this path is correct
            alt="Rating stars"
            width={100} // Set an appropriate width
            height={20} // Set an appropriate height
          />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
