'use client'
import { useState, useEffect } from 'react';
import * as React from 'react';
import styles from './userProfile.module.css';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { db, auth } from '@/firebase/config';

import { setDoc, doc, addDoc, deleteDoc, docSnap, getDoc, collection, onSnapshot } from 'firebase/firestore';
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
    const [savedRecipes,setSavedRecipes] = useState([]);

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /** Firebase Form Set Up **/
    const [recipes, setRecipes] = useState([]);

    const [form, setForm] = useState({
        title: "",
        desc: "",
        ingredients: [],
        steps: []
    });

    const [popupActive, setPopupActive] = useState(false);

    const recipesCollectionRef = collection(db, "createdRecipes")

    useEffect(() => {
        onSnapshot(recipesCollectionRef, snapshot => {
            setRecipes(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    }, [])

    const handleView = id => {
        const recipesClone = [...recipes]
    
        recipesClone.forEach(recipe => {
            if (recipe.id === id) {
                recipe.viewing = !recipe.viewing
            } else {
                recipe.viewing = false
            }
        })
    
        setRecipes(recipesClone)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
    
        if (
            !form.title ||
            !form.desc ||
            !form.ingredients ||
            !form.steps
        ) {
            alert("Please fill out all fields")
            return
        }
    
        addDoc(recipesCollectionRef, form)
    
        setForm({
            title: "",
            desc: "",
            ingredients: [],
            steps: []
        })
    
        setPopupActive(false)
    }
    
    const handleIngredient = (e, i) => {
        const ingredientsClone = [...form.ingredients]
    
        ingredientsClone[i] = e.target.value
    
        setForm({
            ...form,
            ingredients: ingredientsClone
        })
    }
    
    const handleStep = (e, i) => {
        const stepsClone = [...form.steps]
    
        stepsClone[i] = e.target.value
    
        setForm({
            ...form,
            steps: stepsClone
        })
    }
    
    const handleIngredientCount = () => {
        setForm({
            ...form,
            ingredients: [...form.ingredients, ""]
        })
    }
    
    const handleStepCount = () => {
        setForm({
          ...form,
          steps: [...form.steps, ""]
        })
    }
    
    const removeRecipe = id => {
        deleteDoc(doc(db, "createdRecipes", id))
    }

    // Need to replace with context and do re-routing if no user signed in!!

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

    // Get saved recipes
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
                        <div className={styles.buttons}>
                            <button onClick={() => setPopupActive(!popupActive)} className={styles.button}>Add recipe</button>
                        </div>
                        <div className={styles.recipes}>
                            { recipes.map((recipe, i) => (
                                <div className={styles.recipe} key={recipe.id}>
                                    <h3 className={styles.h3}>{ recipe.title }</h3>

                                    <p className={styles.h3}dangerouslySetInnerHTML={{ __html: recipe.desc }}></p>

                                    { recipe.viewing && <div>
                                        <h3 className={styles.h3}>Ingredients:</h3>
                                        <ul className={styles.ul}>
                                            { recipe.ingredients.map((ingredient, i) => (
                                                <li key={i} className={styles.ul}>{ ingredient }</li>
                                            ))}
                                        </ul>

                                        <h3 className={styles.h3}>Steps:</h3>
                                        <ol className={styles.ul}>
                                            { recipe.steps.map((step, i) => (
                                                <li key={i} className={styles.ul}>{ step }</li>
                                            ))}
                                        </ol>
                                    </div>}

                                    <div className={styles.buttons}>
                                        <button onClick={() => handleView(recipe.id)}>View { recipe.viewing ? 'less' : 'more' }</button>
                                        <button className={styles.remove} onClick={() => removeRecipe(recipe.id)}>Remove</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                        
                        { popupActive && <div className={styles.popup}>
                            <div className={styles.popupInner}>
                                <h2>Add a new recipe</h2>

                                <form onSubmit={handleSubmit}>

                                    <div className={styles.formGroup}>
                                        <label>Title</label>
                                        <input 
                                            type="text" 
                                            value={form.title} 
                                            onChange={e => setForm({...form, title: e.target.value})} 
                                            className={styles.input}/>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Description</label>
                                        <textarea 
                                            type="text" 
                                            value={form.desc} 
                                            onChange={e => setForm({...form, desc: e.target.value})} 
                                            className={styles.textarea}/>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Ingredients</label>
                                        {
                                            form.ingredients.map((ingredient, i) => (
                                            <input 
                                                type="text"
                                                key={i}
                                                value={ingredient} 
                                                onChange={e => handleIngredient(e, i)} 
                                                className={styles.input}/>
                                            ))
                                        }
                                        <div className={styles.buttons}>
                                            <button type="button" onClick={handleIngredientCount}>Add ingredient</button>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Steps</label>
                                        {
                                            form.steps.map((step, i) => (
                                            <textarea 
                                                type="text"
                                                key={i}
                                                value={step} 
                                                onChange={e => handleStep(e, i)} 
                                                className={styles.textarea}/>
                                            ))
                                        }
                                        <div className={styles.buttons}>
                                            <button type="button" onClick={handleStepCount}>Add step</button>
                                        </div>
                                    </div>

                                    <div className={styles.buttons}>
                                        <button type="submit">Submit</button>
                                        <button type="button" class={styles.remove} onClick={() => setPopupActive(false)}>Close</button>
                                    </div>

                                </form> 
                            </div>
                        </div>}
                    </div>
                </TabPanel>
            </TabContext>
            </div>
        </div>
        </>
    );
}
