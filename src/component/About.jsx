import React from 'react'
import linebar from '../assets/linebar.png'
import star from "../assets/star.png"
import '../assets/about.css'
const About = () => {
  return (
    <>
    <div class="mt-28 flex justify-center gap-5 items-center">
        <img src={linebar} alt="" class="w-[40%] h-2" />
        <h3 className='heading-2'>About</h3>
        <img src={linebar} alt="" class="w-[40%] h-2 " />
    </div>
    <div className='para'>
        <img src={star} alt="" />
        <div class="w-5/6">
        <p >Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.</p>
        <h4 >The choice is yours. Because they don’t have one.</h4>
        </div>
        <img src={star} alt="" />
    </div>
    </>
  )
}

export default About