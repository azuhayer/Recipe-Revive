'use client'
import React,{useState, useEffect} from 'react'
import styles from './RecipePreview.module.css'
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import {AiFillClockCircle} from 'react-icons/ai'
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';


export default function RecipePreview({recipe}) {
    const [isHovered, setIsHovered] = useState(false);
    const [favorite, setFavorite] = useState(false);
    
    const formatTime =(minutes) =>{
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
      
        const hoursString = hours > 0 ? `${hours}h` : ''; // Include 'h' only if hours > 0
        const minutesString = remainingMinutes > 0 ? `${remainingMinutes}m` : ''; // Include 'm' only if minutes > 0
      
        return hoursString + ' ' + minutesString;
    }
    const viewRecipe=()=>{
        console.log("Route to recipe page");
    }
    const likeRecipe=()=>{
        if(favorite){
            setFavorite(false);
        }else{
            setFavorite(true);
        }
    }
    function getBackgroundColor(mealType) {
        switch(mealType[0]) {
            case 'breakfast':
                return 'rgb(246, 202, 48)';
            case 'lunch/dinner':
                return 'rgb(144, 144, 147)';
            case 'brunch':
                return 'rgb(250, 107, 245)';
            case 'lunch':
                return 'rgb(153, 107, 250)';
            case 'dinner':
                return 'rgb(10, 148, 94)'
            default:
                return 'rgb(222, 127, 54)';
        }
    }

    return (
        <div onClick={()=>{viewRecipe()}} className={styles.parent}>
            <div style={{backgroundImage:`url(${recipe?.image || (recipe?.recipe?.image || '')})`}} className={styles.image}>
                <div className={styles.favoriteButtonContainer}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event from bubbling to the parent
                            likeRecipe();
                        }}
                        className={styles.favoriteButton}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        >
                        {isHovered | favorite ? (
                            <FcLike></FcLike>
                        ) : (
                            <FcLikePlaceholder></FcLikePlaceholder>
                        )}
                    </button>
                </div>
                <div>
                {(recipe?.cookTime || recipe?.recipe?.totalTime)?(
                <div className={styles.cookTime}>
                    <AiFillClockCircle></AiFillClockCircle>
                    <div>{formatTime(recipe?.cookTime || recipe?.recipe?.totalTime)}</div>

                </div>):null}</div>
            </div>
            <div className={styles.details}>
                <h1 className={styles.name}>{recipe?.name || (recipe?.recipe?.label || 'Unknown Recipe')}</h1>
                {(recipe?.rating) ? (<div className={styles.rating}>
                    <Rating name="half-rating-read" 
                            value={recipe?.rating || 0}
                            precision={0.5} 
                            readOnly
                    />
                </div>):null}
                {recipe.recipe?.calories ? (
                <span className={styles.cal}>
                    {Math.floor(recipe.recipe?.calories)} cal
                </span>):null}
                {recipe.recipe?.mealType ? (
                <span style={{backgroundColor: getBackgroundColor(recipe.recipe?.mealType)}} className={styles.mealType}>
                    {recipe.recipe?.mealType[0]} 
                </span>):null}

            </div>
        
        </div>
    )
}
