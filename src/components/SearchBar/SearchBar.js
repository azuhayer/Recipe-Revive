import React from 'react';

const SearchBar = () => {
    return (
      <div className="mx-auto max-w-[1000px] xl:w-[1000px] lg:w-[900px] md:w-[600px] w-[350px]  relative flex p-3 bg-white border rounded-lg ">
        <input
          type="text"
          id="search-recipe"
          className="p-3 mr-[10px] w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search recipe"
        />

        <button className="p-4 inline-flex items-center rounded-md border font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchBar;