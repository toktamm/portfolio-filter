import React from "react";

export default function Menu({ menuItem }) {
  return (
    <div className="menu-menu">
      {menuItem.map((item) => {
        return (
          <div className="menu-item-container" key={item.id}>
            <div className="menu-item">
              <img src={item.image} alt="blog post image" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
