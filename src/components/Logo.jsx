import React from 'react';
import { SiHiveBlockchain } from 'react-icons/si';
import { SiBlockchaindotcom } from 'react-icons/si';

const Logo = () => {
  return (
    <div className='flex max-w-[150px]'>
        <SiHiveBlockchain fontSize={35} className='text-white'/>
        <span className="text-3xl text-white ml-2 font-['inter']">crypt</span>
    </div>
  )
}

export default Logo