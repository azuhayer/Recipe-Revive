'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar';
import SearchBar from '@/components/SearchBar/SearchBar';
import RecipeView from '@/components/RecipeView/RecipeView';
import fetchRecipeById from '../../../utils/fetchRecipeDetails';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const [recipeData, setRecipeData] = useState(null);
  // const recipeId = 'be3ba087e212f13672b553ecfa876333'; // Replace with the actual recipe ID
  const router = useRouter();
  const searchParams = useSearchParams();


  const fetchData = async (recipeId) => {
    try {
      const data = await fetchRecipeById(recipeId);
      setRecipeData(data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  }
  useEffect(() => {
      const recipeId = searchParams.get('recipeId');
      fetchData(recipeId);
  }, [searchParams]);


  return (
    <div>
      <NavBar />
      <div className="w-auto top-0 bg-slate-900 py-20 mx-auto">
        <SearchBar />
      </div>
      {recipeData && <RecipeView recipeData={recipeData} />}
    </div>
  );
}