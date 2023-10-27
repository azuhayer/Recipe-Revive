'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {FaMagnifyingGlass} from 'react-icons/fa6'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/explore/?search=${searchQuery}`);
  };

  return (
    <div className="mx-auto 2xl:w-[1500px] lg:w-[1000px] md:w-[800px] w-[350px] relative flex bg-white rounded-full border-[0.5px] shadow-md">
      {/* <div className="mx-auto max-w-[1000px] xl:w-[1000px] lg:w-[900px] md:w-[600px] w-[350px] relative flex p-3 bg-white border rounded-lg">
        <input
          type="text"
          id="search-recipe"
          className="p-3 mr-[10px] w-full border rounded-md focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search recipe"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          className="p-4 inline-flex items-center rounded-md border font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div> */}
        <input
          type="text"
          id="search-recipe"
          className=" w-full rounded-full outline-none px-8 py-2 lg:text-[30px] md:text-[20px]"
          placeholder="Search recipe"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          className="bg-slate-900 text-white  rounded-full px-8 lg:text-[30px] md:text-[20px]"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass/>
        </button>
    </div>
  );
};

export default SearchBar;