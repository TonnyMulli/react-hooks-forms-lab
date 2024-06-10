import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Call the callback prop to add the new item
    onItemFormSubmit(newItem);

    // Clear input fields after submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          onChange={handleNameChange}
          aria-label="Name"
          required
        />
      </label>

      <label>
        Category:
        <select
          value={itemCategory}
          onChange={handleCategoryChange}
          aria-label="Category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
