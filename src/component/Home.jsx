import React from 'react'
import '../assets/home.css'
const Home = () => {
  return (
    <>
     <nav class="p-4 absolute top-0 z-10 w-[100%]" >
        <img src="logo.png" alt="" class="pl-[70px]"   />
    </nav>
    <div className='banner'>
      {/* <img src="banner1.jpg" alt="" class="h-[30%] relative" /> */}
      <h2 className='heading-1'>The choice is yours. <span class="block w-[108%]">Because they don’t have one.</span> </h2>
      <button className='btn-1'>QUICK VIEW</button>

    </div>
    
    </>
  )
}

export default Home