'use client'
import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import Link from "next/link";
import { useState } from 'react';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 bg-slate-900 "> {/**Large Nav */}
        <div className="flex justify-between items-center px-4 py-2">
            <a className='' href='/'>
                <span className='text-white text-[40px] md:text-[60px] font-bold flex'>
                    Recipe Revive
                </span>
            </a>
            <div>
                <ul className='hidden md:flex text-white' >
                    <Link href='/about'>
                        <li className='ml-3 hover:bg-white hover:text-black py-2 px-4 text-[18px] rounded-full'>About Us</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='ml-3 hover:bg-white hover:text-black py-2 px-4 text-[18px] rounded-full'>Contact</li>
                    </Link>
                    <Link href='/login-signup'>
                        <li className='ml-3 hover:bg-white hover:text-black py-2 px-4 text-[18px] rounded-full'>Login</li>
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
                            <Link href='/login-signup'>
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