// React Component Code
import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [activeCategory, setActiveCategory] = useState("women");
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuData = {
    women: {
      newIn: ["View All", "Clothing", "Shoes", "New In: Today", "New In: Selling Fast",],
      clothing: ["Dresses", "Tops", "Skirts", "Coats & Jackets", "Jumpers & Cardigans"],
      
    },
    men: {
      newIn: ["View All", "Clothing", "Shoes", "New Arrivals", "Trending Now"],
      clothing: ["Shirts", "T-Shirts", "Pants", "Jackets", "Sweaters"],
    },
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setHoveredMenu(null);
  };

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };
  return (
    <div className="navbar1">
      <div className="categories">
        <button
          className={activeCategory === "women" ? "active" : ""}
          onClick={() => handleCategoryClick("women")}
        >
          Women
        </button>
        <button
          className={activeCategory === "men" ? "active" : ""}
          onClick={() => handleCategoryClick("men")}
        >
          Men
        </button>
      </div>
      <div className="menu">




        <div
          className="menu-item"
          onMouseEnter={() => handleMouseEnter("newIn")}
          onMouseLeave={handleMouseLeave}
        >
          New In
          {hoveredMenu === "newIn" && (
            <div className="dropdown">
              {menuData[activeCategory].newIn.map((item, index) => (
                <div key={index} className="dropdown-item">
                  {item}
                </div>
              ))}
            </div>
         )}
     </div>





<div
  className="menu-item"
  onMouseEnter={() => handleMouseEnter("clothing")}
  onMouseLeave={handleMouseLeave}
>
  Clothing
  {hoveredMenu === "clothing" && (
    <div className="dropdown">
      {menuData[activeCategory].clothing.map((item, index) => (
        <div key={index} className="dropdown-item">
          {item}
        </div>
      ))}
    </div>
  )}
</div>


<div
  className="menu-item"
  onMouseEnter={() => handleMouseEnter("clothing")}
  onMouseLeave={handleMouseLeave}
>
  Clothing
  {hoveredMenu === "clothing" && (
    <div className="dropdown">
      {menuData[activeCategory].clothing.map((item, index) => (
        <div key={index} className="dropdown-item">
          {item}
        </div>
      ))}
    </div>
  )}
</div>





</div>
</div>
);
};

export default DropdownMenu;