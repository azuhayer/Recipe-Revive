'use client'
import { useState, useEffect } from 'react';
import * as React from 'react';
import styles from './userProfile.module.css';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
//import Tabs from '@/components/Tabs/Tabs';
import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { db,auth } from '@/firebase/config';

import { setDoc,doc,docSnap,getDoc } from 'firebase/firestore';
import fetchRecipeById from '../../../utils/fetchRecipeDetails';
import RecipeViewGrid from '@/components/RecipeViewGrid/RecipeViewGrid';
import NavBar from '@/components/NavBar/NavBar';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function UserProfile() {
    // Initialize the 'activeTab' state variable to manage the currently active tab
    const [activeTab, setActiveTab] = useState('saved'); 
    // Initialize the 'isFormOpen' state variable to manage the visibility of a recipe form
    const [isFormOpen, setIsFormOpen] = useState(false);
    // Initialize the 'selectedImage' state variable to hold the image selected for uploading
    const [selectedImage, setSelectedImage] = useState(null);

    const [savedRecipes,setSavedRecipes] = useState([]);

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    // Function to open the form modal
    const openForm = () => {
        setIsFormOpen(true);
    };

    // Function to close the form modal
    const closeForm = () => {
        setIsFormOpen(false);
    };


    //Need to replace with context and do re-routing if no user signed in!!

    const [user, setUser] = useState('');
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
              console.log("user:",user)
              setUser(user);
            } else {
              setUser(null);
            }
          });
          return () => unsubscribe();
      
    }, [])

    //get saved recipes
    useEffect(() => {
        if (user){
            const getsaved = async ()=>{

                let saved = []
                const ref = doc(db, "savedRecipes", user.uid);
                const docSnap = await getDoc(ref)
                if (docSnap.exists()) {
                    let recipes = docSnap.data().saved;
                    saved = recipes;
                };

                console.log("savedRecipes",saved);
                let recipeDetailsPromises = saved.map(id => fetchRecipeById(id));
                Promise.all(recipeDetailsPromises)
                .then(results => {
                    let recipeDetails = results.map(result => result); 
                    setSavedRecipes(recipeDetails);
                })
                .catch(error => {
                    console.error("An error occurred:", error);
                });

            };

            getsaved();



        }
      }, [user])
    
    

    // Define the handleSubmitForm function
    const handleSubmitForm = (formData) => {
        // Handle the form submission here
        console.log('Form data submitted:', formData);
     
        // Close the form after submission
        closeForm();
    };

    return (
        <>
        <NavBar></NavBar>
        <div className={styles.profile}>
            {/* User Image Placeholder*/}
            <div className='bg-slate-900 py-7'>
                <ProfileImage />
                {/* User Name and Email Placeholder*/}
                <ProfileInfo email={user?.email} userName={user?.displayName}/>
            </div>
            {/* Tabs Section */}
            {/* Tab Content Section */}
            <div className={styles.tabContainer}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Saved Recipes" value="1" />
                    <Tab label="Weekly Planner" value="2" disabled/>
                    <Tab label="Created Recipes" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <RecipeViewGrid recipes={savedRecipes}/>
                </TabPanel>
                <TabPanel value="2">Weekly Planner</TabPanel>
                <TabPanel value="3">
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
                    </div>
                </TabPanel>
            </TabContext>
            </div>

        </div>
        </>
    );
}
