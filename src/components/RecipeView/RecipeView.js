 'use client'
import React from 'react';
import styles from './RecipeView.module.css';


function RecipeView({ recipeData }) {
  const {
    label,
    totalTime,
    calories,
    yield: recipeYield,
    image,
    ingredientLines,
    url,
    totalNutrients,
  } = recipeData.recipe;

  const flooredCalories = Math.ceil(calories);
  const cookTimeDisplay = totalTime > 0 ? totalTime : 'Unavailable';

  return (
    <div className={`bg-slate-900 min-h-[100vh] h-[auto] ${styles.page}`}>
      <div className="flex flex-col justify-center lg:pt-[100px]">
        <div className="text-center">
          <h1 className="text-[40px] text-white">{label}</h1>
          <h2 className="text-[20px] text-white py-2">
            Time: {cookTimeDisplay} | Calories: {flooredCalories} | Portions: {recipeYield}
          </h2>
          <img
            src={image}
            alt={label}
            className="mx-auto block rounded-full lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] h-[280px] w-[280px]"
          />
        </div>

        <div className='flex justify-center pt-10'>
          <div className="flex lg:flex-row flex-col justify-center align-middle text-black mx-4">
            <div className='border rounded-[10px] shadow p-10 m-[20px] bg-white sm:max-w-[400px]'>
              <h3 className="text-[35px] text-center text-decoration-line: underline">
                Nutrients
              </h3>
              {/* Nutritional Info */}
              <ul className={`text-black list-disc text-[20px] mt-4 p-2`}>
                {Object.entries(totalNutrients).map(([nutrient, value]) => (
                  <li key={nutrient}>
                    <strong>{value.label}</strong>: {Math.ceil(value.quantity)} {value.unit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border rounded-[10px] shadow p-10 m-[20px] bg-white sm:max-w-[400px]">
              <h3 className="text-[35px] text-center text-decoration-line: underline">
                Ingredients
              </h3>
              <div>
                <ol className={`list-disc text-[20px] mt-4 p-2`}>
                  {ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ol>
              </div>
              <div className="flex justify-center">
                <a target="_blank" href={url} rel="">
                  <div className="mt-10 px-4 text-white bg-black hover:bg-white hover:text-black py-2 text-[20px] rounded-full text-center">
                    View instructions
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
