import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Services from './Services';
import Transactions from './Transactions';
import Footer from './Footer';

const Home = () => {
  return (
    <>
        <div className="h-screen">
            <div className='gradient-bg-welcome'>
                <Navbar />
                <Welcome />
            </div>
            <Services />
            <Transactions />
            <Footer />  
        </div>
    </>
  )
}

export default Home