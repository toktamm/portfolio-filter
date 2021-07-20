import React from "react";

export default function Button({ filetrItemsCategory }) {
  return (
    <div>
      <button type="button" onClick={() => filetrItemsCategory('Tips')}>Tips</button>
    </div>
  );
}
