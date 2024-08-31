import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Products from './component/Products'
import Footer from './component/Footer'
import PopupForm from './component/PopupForm'

function App() {
  

  return (
    <>
     <Home/>
     <About/>
     <Products/>
     <Footer/>
     <PopupForm/>
    </>
  )
}

export default App
