import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Guides from './components/Guides';


const App = () => {

  return (
    <>
      <Router basename='/'>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Guides" element={<Guides />}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
