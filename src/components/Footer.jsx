import React from 'react';
import logo from '../../images/logo.png'
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between flex-col items-center gradient-bg-footer p-4'>
      <div className="flex w-full sm:flex-row flex-col justify-between items-center my-4">
        <div className='flex flex-[0.5] justify-center items-center'>
          <Logo />
        </div>
        <div className="flex flex-1 flex-wrap justify-evenly items-center sm:mt-0 mt-5 w-full">
          <p className="text-white text-base mx-2 cursor-pointer">Market</p>
          <p className="text-white text-base mx-2 cursor-pointer">Exchange</p>
          <p className="text-white text-base mx-2 cursor-pointer">Tutorials</p>
          <p className="text-white text-base mx-2 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-center text-sm font-['inter'] font-light">come join us</p>
        <p className="text-white text-center text-sm font-['inter'] font-light">bossfemzy10@gmail.com</p>
      </div>
      <div className="w-full sm:w-[90%] h-[0.25px] bg-gray-400 mt-5 flex justify-between">
      </div>
      <div className="flex w-full sm:w-[90%] md:flex-row flex-col justify-between items-center mt-3">
        <p className="text-white text-center text-sm font-['inter'] font-light">@Femtech-web 2022</p>
        <div className="flex justify-evenly md:mt-0 mt-5">
          <span><BsFacebook fontSize={18}  className='text-white ml-3'/></span><span>
          <FaTwitter fontSize={18} className='text-white ml-3'/></span><span>
          <BsInstagram fontSize={18} className='text-white ml-3'/></span>
        </div>
        <p className="text-white text-center text-sm md:mt-0 mt-5 font-['inter'] font-light">All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer