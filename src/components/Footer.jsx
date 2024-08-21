import React from 'react'
import Logo from "../assets/Logo.svg"
import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { BsYoutube} from "react-icons/bs"
import { FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Testimonials </span>
                <span>Careers</span>
                <span>Work </span> 
            </div>
            <div className="footer-section-columns">
                <span>1-800-555-555</span>
                <span>info@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span> Terms and Conditions</span>
                <span> Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer