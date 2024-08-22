import React from 'react';

const RecipeDetails = ({ recipe, onFavorite, onRemoveFavorite, isFavorite }) => {
  if (!recipe) return <div>Select a recipe to view details</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => isFavorite ? onRemoveFavorite(recipe) : onFavorite(recipe)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
