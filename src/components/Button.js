import React from "react";

export default function Button({ button, filetrItemsCategory }) {
  return (
    <div className="button-buttons">
      {button.map((category, index) => {
        return (
          <button
            type="button"
            onClick={() => filetrItemsCategory(category)}
            className="button-btn"
          >{category}</button>
        );
      })}
    </div>
  );
}
