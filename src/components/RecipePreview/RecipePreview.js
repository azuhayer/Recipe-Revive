'use client'
import React,{useState, useEffect} from 'react'
import styles from './RecipePreview.module.css'
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import {AiFillClockCircle} from 'react-icons/ai'
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { db,auth } from '@/firebase/config';
import { setDoc,doc,docSnap,getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'


export default function RecipePreview({recipe}) {
    const [isHovered, setIsHovered] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [id,setId]= useState('');
    const router = useRouter();
    const formatTime =(minutes) =>{
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
      
        const hoursString = hours > 0 ? `${hours}h` : ''; // Include 'h' only if hours > 0
        const minutesString = remainingMinutes > 0 ? `${remainingMinutes}m` : ''; // Include 'm' only if minutes > 0
      
        return hoursString + ' ' + minutesString;
    }
    const viewRecipe=()=>{
        router.push(`/details/?recipeId=${id}`);
    }
    const likeRecipe=async ()=>{
        const ref = doc(db, "savedRecipes", user.uid);
        const docSnap = await getDoc(ref)
        let saved =[]
        if (docSnap.exists()) {
            let recipes = docSnap.data().saved;
            saved = recipes;
            console.log("exists",recipes)
        };

        if(favorite){
            saved = saved.filter(existingId => existingId !== id);
            console.log("Saved",saved);
            
            try {
                await setDoc(ref, {saved:saved}, { merge: true }); // Write data with merge option
                console.log('Document successfully written!');

                setFavorite(false);
            } catch (e) {
                console.error("Error writing document: ", e);
            }
        }else{
            saved.push(id);
            console.log("saved",saved)
            try {
                await setDoc(ref, {saved:saved}, { merge: true }); // Write data with merge option
                console.log('Document successfully written!');
                setFavorite(true);
            } catch (e) {
                console.error("Error writing document: ", e);
            }
        }

    }

    function extractRecipeId(url) {
        const parts = url.split('/');
        const lastSegment = parts.pop();  
        return lastSegment.split('?')[0];
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


    const [user, setUser] = useState(null)
    //Need to replace with context and do re-routing if no user signed in!!
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

    //setting recipes as liked if it was previously liked
    useEffect(() => {
        if (recipe && recipe._links) {
            const id = extractRecipeId(recipe._links.self.href);
            setId(id);
        }
      if (user){
        const getsaved = async ()=>{
            const ref = doc(db, "savedRecipes", user.uid);
            const docSnap = await getDoc(ref)
            let saved =[]
            if (docSnap.exists()) {
                let recipes = docSnap.data().saved;
                saved = recipes;
            };
            if (saved.includes(id)){
                setFavorite(true)
            }else{
                setFavorite(false);
            }
        };
        getsaved();
      }
    }, [user, recipe])
    

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
                {recipe?.recipe?.calories ? (
                <span className={styles.cal}>
                    {Math.floor(recipe?.recipe?.calories)} cal
                </span>):null}
                {recipe?.recipe?.mealType ? (
                <span style={{backgroundColor: getBackgroundColor(recipe?.recipe?.mealType)}} className={styles.mealType}>
                    {recipe?.recipe?.mealType[0]} 
                </span>):null}

            </div>
        
        </div>
    )
}
