import React from 'react'
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4">
            <Link href='/'>
                <Image
                src={Logo}  /* LOGO IMAGE GOES HERE */
                alt='Logo'
                width='205'
                height='75'
                className='cursor-pointer'
                priority
                />
            </Link>
            <div>
                <ul className='hidden sm:flex'>
                    <Link href='/about'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>About Us</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>Contact</li>
                    </Link>
                    <Link href='/login-signup'>
                        <li className='ml-10 uppercase hover:border-b text-xl'>Login/Signup</li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar