import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from  '../utils/dummyData';
import { shorten } from '../utils/shortenAddress';
import UseFetch from '../hooks/UseFetch';

const TransactionCard = ({addressTo, addressFrom, amount, message, url, keyword, timestamp}) => {
  const gifUrl = UseFetch({keyword});

  return (
    <div className="bg-[#181918] m-4 flex flex-
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    flex-col p-3 rounded-md hover:shadow-2xl
    ">
      <div className="flex w-full flex-col mt-3 items-center">
        <div className='w-full mb-6 p-2'>
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopener noreferrer'>
            <p className="text-white text-base">From: {shorten(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
            <p className="text-white text-base">To: {shorten(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount}</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img src={gifUrl || url} 
            alt="gif" 
            className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover'
          />
          <div className="bg-black px-5 p-3 w-max -mt-5 rounded-3xl shadow-2xl">
            <p className="text-[#37d7da] font-bold">{timestamp}</p>
          </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
        <div className="flex flex-col md:p-12 py-12  px-4">
          {currentAccount ? 
            (<h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>)
            :
            (<h3 className="text-white text-3xl text-center my-2">connect your account to see the latest Transactions</h3>)
          }
          <div className="flex justify-center items-center flex-wrap mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Transactions