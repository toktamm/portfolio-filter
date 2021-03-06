import { useState } from "react";
import items from "./AllData";
import Menu from "./components/Menu";
import Button from "./components/Button";
import "./App.css";

const allCategories = ["All", ...new Set(items.map(item => item.category))];
console.log("allcategories are", allCategories);

function App() {
  const [menuItem, SetMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filetrItemsCategory = (button) => {
    if (button === "All") {
      SetMenuItem(items);
      return;
    }

    const filteredCategories = items.filter((item) => item.category === button);
    SetMenuItem(filteredCategories);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>
          Portfolio
          <span> Filter</span>
        </h1>
      </div>
      <Button button={buttons} filetrItemsCategory={filetrItemsCategory} />
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default App;
