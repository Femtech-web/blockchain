import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Loader from './Loader';
import { shorten } from '../utils/shortenAddress';


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input placeholder={placeholder}
  name={name}
  value={value}
  step='0.0001'
  type={type}
  onChange={(e) => handleChange(e)}
  className='my-2 w-full rounded-sm p-2 outline-none
   bg-transparent text-white text-sm border-none white-glassmorphism'
   />
)
const commonStyles = 'text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400';

const Welcome = () => {
  const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransactions, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const {addressTo, amount, keyword, message} = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransactions();
    setFormData({})
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className="flex flex-col md:flex-row item-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send crypto <br /> Across the world
          </h1>
          <p className='text-white text-left mt-2 font-light mf:w-9/12 w-11/12 text-base'>
          Explore the Crypto World. Buy and sell Cryptocurrencies easily on Krypto
           </p>

          {!currentAccount && <button
           type='button'
           className='flex flex-row justify-center
            items-center my-5 bg-[#2952e3] cursor-pointer p-3 rounded-full hover:bg-[#2546bd] '
           onClick={connectWallet}>
              <p className='text-white text-base font-semibold' onClick={connectWallet}>connect wallet</p>
           </button>}

           <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
           </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 justify-end item-start flex-col h-40 
            rounded-xl sm:w-72 w-full my-5 eth-card white-glassmorphism">
              <div className="flex justify-between flex-col h-full w-full">
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 rounded-full border-white border-2 flex justify-center items-center">
                    <SiEthereum fontSize={21} color='#fff'/>
                  </div>
                  <BsInfoCircle fontSize={17} color='#fff'/>
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {!currentAccount ? 'Address' : shorten(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
              </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center p-5 w-full sm:w-96 blue-glassmorphism">
              <Input placeholder='Address To' name='addressTo'
               type='text' handleChange={handleChange} />
               <Input placeholder='Amount (ETH)' name='amount'
               type='number' handleChange={handleChange} />
               <Input placeholder='Keyword (Gif)' name='keyword'
               type='text' handleChange={handleChange} />
               <Input placeholder='Enter Message' name='message'
               type='text' handleChange={handleChange} />

               <div className="h-[1px] w-ful bg-gray-400 my-2"></div>

               {isLoading ? 
               (<Loader />)
                : (<button
                type='button'
                onClick={handleSubmit}
                className='w-full text-white mt-2 p-2 border-[1px] 
                border-[#3d4f7c] rounded-full cursor-pointer hover:shadow-lg'
                >
                  send now
                </button>)}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome