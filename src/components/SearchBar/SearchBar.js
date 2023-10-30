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
        <input
          type="text"
          id="search-recipe"
          className=" w-full rounded-full outline-none px-12 py-5 lg:text-[20px] md:text-[10px]"
          placeholder="Search recipe"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          data-testid="search-button"
          className="hover:bg-black bg-slate-900 text-white  rounded-full px-9 lg:text-[25px] md:text-[15px]"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass/>
        </button>
    </div>
  );
};

export default SearchBar;