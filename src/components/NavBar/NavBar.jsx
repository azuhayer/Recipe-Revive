'use client'
import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import Link from "next/link";
import { useState } from 'react';
import { Popover } from '@headlessui/react';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{zIndex:'101'}} className="fixed w-full top-0 bg-slate-900 "> {/**Large Nav */}
        <div className="flex justify-between items-center px-20 py-4">
            <a className='' href='/'>
                <span style={{fontFamily:'Chalkduster'}} className='text-white text-[10px] md:text-[15px] font-black flex font-mono'>
                    RecipeRevive
                </span>
            </a>
            <div>
                
                <ul className='hidden md:flex text-white' >
                    {/*about us*/}
                    <Popover className="relative ">
                        <Popover.Button className='select-none focus:outline-none focus:ring-0'>
                            <li className='ml-3  font-light hover:bg-white hover:text-black py-2 px-4 text-[13px] rounded-full'>About Us</li>
                        </Popover.Button>

                        <Popover.Panel className="absolute z-10 ml-[-200px]">
                            <div className="flex flex-col w-[300px] bg-white text-black p-10 rounded-[10px] mt-5 ">
                                As food lovers, our goal is to create a web-application that is easy to use, search and share your favorite recipes, 
                                using a simple and minimalistic UI.

                                <Link className='mt-4 justify-center text-center' href='https://github.com/azuhayer/Recipe-RevivE'>
                                    <li className='ml-3 hover:bg-slate-800 hover:text-white py-2 px-4 text-[13px] rounded-full'>Visit our GitHub</li>
                                </Link>

                            </div>

                            

                        </Popover.Panel>
                    </Popover>

                    <Link href='/userProfile'>
                        <li className='ml-3 font-light hover:bg-white hover:text-black py-2 px-4 text-[13px] rounded-full'>Profile</li>
                    </Link>
                    <Link href='/login'>
                        <li className='ml-3 font-light hover:bg-white hover:text-black py-2 px-4 text-[13px] rounded-full'>Login</li>
                    </Link>
                </ul>
            </div>

            <div className=" md:hidden z-50"> {/**Small Nav */}
                <div>
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-white text-[30px]"
                    >
                    <AiOutlineBars/>
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-auto rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                        <ul className="py-1" role="none">
                            <Link href='/about'>
                                <li className='hover:bg-black hover:text-white py-2 px-4 text-[16px]'>About Us</li>
                            </Link>
                            <Link href='/contact'>
                                <li className='hover:bg-black hover:text-white py-2 px-4 text-[16px]'>Contact</li>
                            </Link>
                            <Link href='/login'>
                                <li className='hover:bg-black hover:text-white py-2 px-4 text-[16px]'>Login</li>
                            </Link>
                        </ul>
                    </div>
                )}
            </div>


        </div>
    </nav>

    
  );
};

export default NavBar;