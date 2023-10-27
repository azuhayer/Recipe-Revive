'use client'
import React from 'react';
import styles from './RecipeView.module.css';

function RecipeView() {
  return (
    <div>
      <h1 className={styles.centerStyle}>Easy Mushroom Soup</h1>
      <h2 className={styles.centerStyle}>40 Min | 928g Nutrition | 200 Reviews</h2>
      <img
        src="https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl.jpg"
        alt="Mushroom Soup"
        className={styles.center}
      />

      <div className={styles.flexContainerStyle}>
        <div className={styles.flexItemStyle}>
          <h3>Ingredients</h3>
          <ul>
            <li>1 tbsp olive oil</li>
            <li>1 onion, finely chopped</li>
            <li>750g chestnut mushrooms, sliced</li>
            <li>2 garlic cloves, crushed</li>
            <li>500ml vegetable stock</li>
          </ul>
        </div>
        <div className={styles.flexItemStyle}>
          <h3>Link to Recipe</h3>
          <p>url</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
