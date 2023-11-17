import RecipeView from '@/components/RecipeView/RecipeView'
import React from 'react'
import NavBar from '@/components/NavBar/NavBar';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function page() {
  return (
    <div>
      <NavBar/>
      <div className="w-auto top-0 bg-slate-900 py-20 mx-auto" >
        <SearchBar/>
      </div>
      <div><RecipeView ></RecipeView></div>
    </div>
  )
}
