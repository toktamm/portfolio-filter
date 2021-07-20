import React from "react";

export default function Button({ button, filetrItemsCategory }) {
  return (
    <div>
      {button.map((category, index) => {
        return (
          <button
            type="button"
            onClick={() => filetrItemsCategory(category)}
          >{category}</button>
        );
      })}
    </div>
  );
}
