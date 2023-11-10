"use client"
import React, { useState } from 'react';
import styles from './RecipeForm.module.css';

export default function RecipeForm({ onSubmit, onClose }) {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = () => {
    // Validate form fields
    if (recipeName.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
      alert('Please fill in all required fields.');
      return; // Prevent form submission if validation fails
    }   

    // Handle form submission, e.g., validate input and call onSubmit
    onSubmit({
      recipeName,
      ingredients,
      instructions,
      selectedImage,
    });
  };

  return (
    <div className={styles.recipeFormModal}>
      <div className={styles.recipeForm}>
        {/* Close Button */}
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Recipe Name"
            className={styles.formInput}
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <textarea
            placeholder="Ingredients"
            className={styles.formInput}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.formRow}>
          <textarea
            placeholder="Instructions"
            className={styles.formInput}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.formRow}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className={styles.formRow}>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
