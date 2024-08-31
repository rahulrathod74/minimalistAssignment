import React from 'react'
import footerline from "../assets/footerline.png"
import insta from "../assets/insta.png"
import youtube from "../assets/youtube.png"
import twit from "../assets/twit.png"
import facebook from "../assets/facebook.png"
import flower from "../assets/flower.png"
import linkedin from "../assets/linkedin.png"
import "../assets/footer.css"
const Footer = () => {
  return (
    <>
    <img src={footerline} alt="" class="w-full mt-20" />
    <div className='footer'>
        <img src={flower} alt="" />
        <div className='footer-head'>
        <h1 >Follow us on</h1>
        <div className='social'>
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
            <img src={twit} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
        </div>
        </div>
        <img src={flower} alt="" />
    </div>
    <img src={footerline} alt="" class="w-full " />
    </> 
  )
}

export default Footer