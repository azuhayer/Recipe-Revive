'use client'
import React, { useState } from 'react';
import styles from './userProfile.module.css';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import Tabs from '@/components/Tabs/Tabs';

export default function UserProfile() {
    // Initialize the 'activeTab' state variable to manage the currently active tab
    const [activeTab, setActiveTab] = useState('saved'); 
    // Initialize the 'isFormOpen' state variable to manage the visibility of a recipe form
    const [isFormOpen, setIsFormOpen] = useState(false);
    // Initialize the 'selectedImage' state variable to hold the image selected for uploading
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the form modal
    const openForm = () => {
        setIsFormOpen(true);
    };

    // Function to close the form modal
    const closeForm = () => {
        setIsFormOpen(false);
    };

     // Function to handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    return (
        // Profile section
        <div className={styles.profile}>
            {/* User Image Placeholder*/}
            <ProfileImage />
            {/* User Name and Email Placeholder*/}
            <ProfileInfo />
            {/* Tabs Section */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Tab Content Section */}
            <div className={styles.tabContent}>
                {/* Display Saved Recipes when activeTab is 'saved' */}
                {activeTab === 'saved' && (
                <div className={styles.savedRecipes}>
                    <div className={styles.recipeGrid}>
                        <div className={styles.recipeItem}>
                            <img src="assets/cover1.jpg" alt="Recipe 1" />
                            <p>Recipe 1</p>
                        </div>

                        <div className={styles.recipeItem}>
                            <img src="assets/cover2.jpg" alt="Recipe 2" />
                            <p>Recipe 2</p>
                        </div>

                        <div className={styles.recipeItem}>
                            <img src="assets/cover3.jpeg" alt="Recipe 3" />
                            <p>Recipe 3</p>
                        </div>
                    </div>

                </div>
                )}
                {/* Display Created Recipes when activeTab is 'created' */}
                {activeTab === 'created' && (
                <div className={styles.createdRecipes}>
                    {/* Button to add a new recipe */}
                    <button onClick={openForm} className={styles.submitButton}>Add Recipe</button>
                    
                    <div className={styles.recipeGrid}>
                        <div className={styles.recipeItem}>
                            <img src="assets/cover4.jpg" alt="Recipe 1" />
                            <p>Recipe 1</p>
                        </div>

                        <div className={styles.recipeItem}>
                            <img src="assets/cover5.jpeg" alt="Recipe 2" />
                            <p>Recipe 2</p>
                        </div>

                        <div className={styles.recipeItem}>
                            <img src="assets/cover6.jpeg" alt="Recipe 3" />
                            <p>Recipe 3</p>
                        </div>
                    </div>
                    {/* Add Recipe Form */}
                    {isFormOpen && (
                    <div className={styles.recipeFormModal}>
                        <div className={styles.recipeForm}>
                            {/* Close Button */}
                            <span className={styles.closeButton} onClick={closeForm}>
                                &times;
                            </span>
                            <div className={styles.formRow}>
                                <input type="text" placeholder="Recipe Name" className={styles.formInput} />
                            </div>
                            <div className={styles.formRow}>
                                <textarea placeholder="Ingredients" className={styles.formInput}></textarea>
                            </div>
                            <div className={styles.formRow}>
                                <textarea placeholder="Instructions" className={styles.formInput}></textarea>
                            </div>
                            <div className={styles.formRow}>
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <div className={styles.formRow}>
                                <button className={styles.submitButton}>Submit</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                )}
            </div>
        </div>
    );
}
