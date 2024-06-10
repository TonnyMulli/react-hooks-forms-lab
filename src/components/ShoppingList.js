import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); // State for search text
  const [allItems, setAllItems] = useState(items); // State for all items

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearchText(searchText); // Update state with the new search text
  }

  const handleItemFormSubmit = (newItem) => {
    // Add the new item to the list of items
    setAllItems([...allItems, newItem]);
  };

  const itemsToDisplay = allItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter((item) => {
    if (!searchText) return true; // Return all items if search text is empty
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      {/* Pass onSearchChange callback and search text to Filter component */}
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
