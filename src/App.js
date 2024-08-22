import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import FavoriteRecipes from './components/FavoriteRecipes';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoriteRecipes from './components/FavoriteRecipes';

import './styles.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on initial render
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to local storage whenever the favorites list changes
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (keyword) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query: keyword,
          apiKey: 'cc156faf926941d7a426978bdf9e2dc2', // Replace with your Spoonacular API key
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleAddFavorite = (recipe) => {
    // Check if the recipe is already in favorites
    if (!favorites.find(fav => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleRemoveFavorite = (recipe) => {
    setFavorites(favorites.filter(fav => fav.id !== recipe.id));
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="main-content">
        <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
        <RecipeDetails
          recipe={selectedRecipe}
          onFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          isFavorite={favorites.some(fav => fav.id === selectedRecipe?.id)}
        />
      </div>
      <FavoriteRecipes favorites={favorites} onSelect={handleSelectRecipe} />
    </div>
  );
};

export default App;
