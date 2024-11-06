
import React, { Dispatch, SetStateAction } from 'react';
import { menu_list } from "../assets";
import Image from 'next/image';

interface ExploreMenuProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
              key={index}
              className="explore-menu-list-items"
            >
              <Image
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
                width={100}
                height={100}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
