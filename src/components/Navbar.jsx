import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';


const NavbarItem = ({title, classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`} >
      {title}
    </li>
  )
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex
     md:justify-center 
     justify-between items-center p-4'>
      <div className="md:flex-[0.5] 
      flex-initial justify-center items-center">
          <Link to={'/'}>
           <Logo />
          </Link>
      </div>
      <ul className="text-white md:flex
       hidden list-none flex-row 
       justify-between items-center 
       flex-initial">
          {['Market', 'Exchange', 'Guides', 'Wallet'].map((item, index) => { 
          return item === 'Guides' ?
            <Link to={item}>
             <NavbarItem key={item + index} title={item}/>
            </Link>
          :
               <NavbarItem key={item + index} title={item}/>
          }
           
          )}
          <li className='bg-[#2952e3] py-4 px-7 mx-4 
          rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li>
      </ul>
      <div className="flex relative">
          {toggleMenu 
          ? <AiOutlineClose fontSize={28} 
          className='text-white md:hidden cursor-pointer' 
          onClick={(e) => setToggleMenu(false)} />
           : <HiMenuAlt4 fontSize={28} 
           className='text-white md:hidden cursor-pointer'
            onClick={(e) => setToggleMenu(true)}/>}
      </div>
      {toggleMenu && 
      <ul
      className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none md:hidden
      flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
      '
      >
        <li className='text-xl w-full my-4'>
          <AiOutlineClose onClick={(e) => setToggleMenu(false)}/>
        </li>
        {['Market', 'Exchange', 'Guides', 'Wallet'].map((item, index) => { 
          return item === 'Guides' ?
            <Link to={item}>
             <NavbarItem key={item + index} title={item}/>
            </Link>
          :
               <NavbarItem key={item + index} title={item}/>
          }
           
          )}
      </ul>
      }
    </nav>
  )
}

export default Navbar