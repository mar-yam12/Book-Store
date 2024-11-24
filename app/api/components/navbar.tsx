import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center bg-teal-950 py-2 md:px-[170px] px-4 text-teal-100'>
    <div>
            <Image src={'/booklogo.png'} width={100} height={100} alt='logo' />
        </div>

        <div>
        
        </div>


        <div className='flex items-center md:space-x-7 space-x-3'>
        <IoSearch size={30}  className='cursor-pointer'/>
        <IoIosContact size={30}  className='cursor-pointer '/>
        <BiCart size={30} className='cursor-pointer '/>

        </div>
    </header>
    </>
  )
}

export default Navbar