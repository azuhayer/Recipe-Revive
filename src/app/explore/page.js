'use client'
import React, { useState, useEffect } from 'react';
import styles from './explore.module.css'
import RecipeViewGrid from '@/components/RecipeViewGrid/RecipeViewGrid'
import Filterbutton from '@/components/FilterButton/Filterbutton';
import filterByKeyword from '@/components/FilterButton/FilterLogic';
import fetchData from '../../../utils/fetchData';

export default function Explore() {
  const sampleRecipes = [
    {
      name:'Miso Soup',
      image:'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
      rating: 3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'120'
    },
    {
      name:'Brazillian Classic',
      image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1626243748/Traditional-Brazilian-Food-Feijoada/Traditional-Brazilian-Food-Feijoada.jpg',
      rating: 2,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'30'
    },
    {
      name:'French Soup With Cheese ',
      image:'https://leitesculinaria.com/wp-content/uploads/2021/03/french-onion-soup-fp.jpg',
      rating: 4,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'150'
    },
    {
      name:'Sweet Potato Soup',
      image:'https://dorastable.com/wp-content/uploads/2020/02/sweet-potato-soup-5.jpg',
      rating: 3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'40'
    },
    {
      name:'Chicken Noodle Soup',
      image:'https://myheartbeets.com/wp-content/uploads/2020/12/easy-chicken-noodle-soup.jpg',
      rating: 5,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'400'
    },
    {
      name:'Noodle Soup',
      image:'https://cookingwithayeh.com/wp-content/uploads/2021/07/Vegetable-Noodle-Soup.jpg',
      rating: 1,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'40'
    },
    {
      name:'Seaweed Tofu Soup',
      image:'https://joyfuldumplings.com/wp-content/uploads/2021/11/15-minutes-super-simple-seaweed-and-tofu-soup4_11zon.jpg',
      rating: 3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'20'
    }
  ];
  const [sortByKeyword, setSortByKeyword] = useState("Sort By"); 
  const [recipes,setRecipes] = useState(sampleRecipes);
  const [fetchError, setFetchError] = useState(null);
  const sortedRecipes = filterByKeyword(recipes,sortByKeyword);

  useEffect(() => {
    (async () => {
        try {
            const data = await fetchData('chicken'); 
            setRecipes(data.hits);
        } catch (error) {
            setFetchError('Failed to fetch recipes. Please try again later.');
        }
    })();
  }, []);


  return (
    <div className={`m-28 ${styles.parent}`}>
        <div className={`${styles.container}`}>
          <div className={`flex justify-between items-center${styles.detailRow}`}>
            <div className={styles.title}>Recipe Results</div>
            <Filterbutton onSortChange={setSortByKeyword} currentSort={sortByKeyword}></Filterbutton>
          </div>
          <div className={`mb-8 ${styles.count}`}>
            <div>{sampleRecipes.length} recipies found</div>
          </div>
          <div className={styles.results}>
          {fetchError ? (
                <div className={styles.error}>{fetchError}</div>
            ) : (
            <RecipeViewGrid recipes={sortedRecipes}/>)}

          </div>
        </div>
      
    </div>
  )
}