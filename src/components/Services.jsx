import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => {
 return  <div className="flex flex-row justify-start items-center 
 white-glassmorphism p-2 m-3 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 flex justify-center items-center rounded-full ${color}`}>
      { icon }
    </div>
    <div className="flex flex-1 flex-col ml-5">
      <h1 className='text-white text-lg mt-2'>{title}</h1>
      <p className='text-white text-sm md: w-9/12 mt-2'>{subtitle}</p>
    </div>
  </div>
}

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
      <div className="flex mf:flex-row flex-col justify-between items-center md:P-20 Py-12 px-4">
        <div className='flex-1 flex flex-col justify-start items-start'>
            <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Services that we
            <br />
            continue to improve
            </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start">
        <ServiceCard color='bg-[#2952e3]' 
          title='Security Guaranteed' 
          icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
          subtitle='Security is guaranteed. we always maintain privacy and maintain the quality of our products.'
        />
         <ServiceCard color='bg-[#8945f8]' 
          title='Best Exchange Rates' 
          icon={<BiSearchAlt fontSize={21} className='text-white' />}
          subtitle="We are here to offer you the very best of Exchange rates, one that you i'll rarely find elsewhere. "
        />
         <ServiceCard color='bg-[#f84550]' 
          title='Fastest transactions' 
          icon={<RiHeart2Fill fontSize={21} className='text-white' />}
          subtitle='Our services are fast and secure in transferring cryptocurrency to anywhere around the world.'
        />
      </div>
    </div>
  )
}

export default Services