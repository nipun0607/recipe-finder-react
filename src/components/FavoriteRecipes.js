import React from 'react';

const FavoriteRecipes = ({ favorites, onSelect }) => {
  return (
    <div className="favorite-recipes">
      <h2>Your Favorite Recipes</h2>
      {favorites.length === 0 && <p>No favorite recipes yet!</p>}
      {favorites.map((recipe) => (
        <div key={recipe.id} className="recipe-item" onClick={() => onSelect(recipe)}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
