'use client'
import React from 'react'
import styles from './RecipeViewGrid.module.css'
import RecipePreview from '../RecipePreview/RecipePreview'


export default function RecipeViewGrid({recipes}) {
  return (
    <div className={`${styles.parent}`}>
      <div className={`sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ${styles.container}`}>
          

          {recipes.map(recipe => (
              <RecipePreview recipe={recipe}></RecipePreview>
          ))}

      </div>
    </div>
  )
}
