import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {


  return (
    <>
      <div>
        <Navbar/>
        <Body/>
        <hr />
        <Footer/>
      </div>
      
    </>
  )
}

export default App
