'use client'
import React from 'react';
import styles from './RecipeView.module.css';

function RecipeView() {
  return (
    <div className= {`bg-slate-900 min-h-[100vh] h-[auto]  ${styles.page}`}>
        <div className='flex lg:flex-row flex-col justify-center'>
          <div className='text-center lg:mr-14'>
            <h1 className='text-[40px] text-white'>Easy Mushroom Soup</h1>
            <h2 className='text-[20px] text-white '>40 Min | 928g Nutrition | 200 Reviews</h2>
            <img
              src="https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl.jpg"
              alt="Mushroom Soup"
              className='mx-auto block rounded-full lg:h-[500px] lg:w-[500px] md:h-[350px] md:w-[350px] h-[280px] w-[280px]'
            />
          </div>

          <div className='flex flex-col justify-center align-middle text-black'>
            <div className='border rounded-[10px] shadow p-10 md:mx-auto m-[20px] bg-white sm:max-w-[400px]'>
              <h3 className='text-[35px] text-center text-decoration-line: underline'>Ingredients</h3>
              <div>
                <ol className={`list-disc text-[20px] mt-4 p-2`}>
                  <li>1 tbsp olive oil</li>
                  <li>1 onion, finely chopped</li>
                  <li>750g chestnut mushrooms, sliced</li>
                  <li>2 garlic cloves, crushed</li>
                  <li>500ml vegetable stock</li>
                </ol>
              </div>
              <div className='flex justify-center'>
                <a target="_blank" href="https://google.com/" rel="">
                    <div className='mt-10 px-4 text-white bg-black hover:bg-white hover:text-black py-2 text-[20px] rounded-full text-center'>View instructions</div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default RecipeView;
