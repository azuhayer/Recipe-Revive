'use client'
import React,{useState} from 'react'
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
        console.log("Like recipe")
        setFavorite(true);
    }

    return (
        <div onClick={()=>{viewRecipe()}} className={styles.parent}>
            <div style={{backgroundImage:`url(${recipe.image})`}} className={styles.image}>
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
                <div className={styles.cookTime}>
                    <AiFillClockCircle/>
                    <div>{formatTime(recipe.cookTime)}</div>

                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.name}>{recipe.name}</div>
                <div className={styles.rating}>
                    <Rating name="half-rating-read" defaultValue={recipe.rating} precision={0.5} readOnly />
                </div>
            </div>
        
        </div>
    )
}
