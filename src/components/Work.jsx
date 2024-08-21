import React from 'react'
import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"


const Work = () => {
    const workInfoData  = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem Ipsum",

        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem Ipsum",

        },
        {
            image: DeliveryMeals,
            title: "Delivery Meals",
            text: "Lorem Ipsum",

        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading"> Work
            </p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}

            </p>
        </div>
    </div>
  )
}

export default Work