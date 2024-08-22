import React, { useState } from 'react';

const RecipeSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query.trim() === '') return;

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=cc156faf926941d7a426978bdf9e2dc2`);
      const data = await response.json();
      onSearch(data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      onSearch([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
