import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    onSearchChange(searchText);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Ensure the input field reflects the search prop
        onChange={handleSearchChange} // Invoke callback on input change
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
