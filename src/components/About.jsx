import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/3.png"
import {BsFillPlayCircleFill} from "raect-icons/bs"


const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
           </div> 
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">  About          </p>
                <h1 className="primary-heading"> Food Is an Important Part of A Balanced Diet </h1>
            <p className="primary-text">
                Lorem Ispum
            </p>
            <div className="about-buttons-container">
                <buton className="secondary-button"> Learn More</buton>
                <button className="watch-video-button">{ " " } <BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About