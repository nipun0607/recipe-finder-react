import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card" onClick={() => onSelect(recipe)}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
