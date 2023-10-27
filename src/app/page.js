import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import RecipeViewGrid from '@/components/RecipeViewGrid/RecipeViewGrid'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar';

const Home = () => {

  const newlyAddedRecipes = [
    { 
      name:'Beef Stew',
      image:'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2019-10-how-to-instant-pot-beef-stew%2F2019-10-21_Kitchn88948_HT-Beef-Stew',
      rating: 4.5,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'120'
    },
    {
      name:'Shrimp Marinara',
      image:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Shrimp-Marinara_EXPS_SSCBZ18_9371_C08_28_6b.jpg?fit=700%2C1024',
      rating: 5,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cookTime:'120'
    },
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

  return (
      <div className="">
        <NavBar/>
        <div className="homeCover text-center">
          <div className='homeCoverText mt-[30px] lg:mt-[50px] py-[30px] px-[20px]'>
            <h1 className=" text-5xl lg:text-8xl md:text-6xl font-bold pb-6">
              Find your next meal
            </h1>
            <p className='text-[20px]'>Get all of your favorite recipes in one place!</p>
          </div>
          

          {/* Search component */}
          <div className=" homeSearch md:my-16 my-5">
            <SearchBar />
          </div>
        </div>

        <div className='lg:m-28 md:m-18 mt-8'>
          {/* Load some recommendations for home page*/}
          <div>
            <h1 className='px-6 mb-10 text-center lg:text-left text-2xl lg:text-4xl md:text-3xl font-semibold text-black'>
              Checkout some of our new recipes:
            </h1>
            <RecipeViewGrid recipes={newlyAddedRecipes}/>
          </div>
        </div>
      </div>
  );
};

export default Home;