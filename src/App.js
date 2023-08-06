import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"
import Home from "./Components/Home"
import Coins from "./Components/Coins"
import Exchange from "./Components/Exchange"
import CoinDetails from "./Components/CoinDetails"
import Footer from "./Components/Footer"

// chart.js is a library of js that is used for chart representation of data.
 
const App = () => {
  return <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/exchange' element={<Exchange/>}/>
          <Route path='/coins/:id' element={<CoinDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
  </>
}

export default App