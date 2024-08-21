import React from 'react'
import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/1.jfif"
import {FiArrowRight} from "react-icons/fi"

 const Home = () => {
   return (
     <div className="home-container">
      <Navbar />
      <div className="home-banner-contaienr">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot and Fresh
          </h1>
          <p className="primary-text">
            Good food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight/>
            </button>
        </div>
        <div className="home-image-container">
        <img src={BannerImage} alt="" />
        </div>
      </div>
     </div>
   )
 }
 
 export default Home