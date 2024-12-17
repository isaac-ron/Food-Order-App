import React from "react";
import './HomeItems.css';
import mealimage from '../assets/navigation-icons/meal.png'
import pillimage from '../assets/navigation-icons/pill.png'
import redwineimage from '../assets/navigation-icons/red-wine.png'


export default function HomeItems() {
    return(
        <>
        <div className="cards-container">
            <div className="cards">
                <div className="card1">
                    <div className="card1-contents">
                        <div className="food-icon">
                            <img className="meal-image" src={mealimage}></img>
                        </div>
                        <h6>Food</h6>
                    </div>
                </div>
                <div className="card2">
                    <div className="card2-contents">
                        <div className="drugs-icon">
                            <img className="pill-image"src={pillimage} />
                        </div>
                        <h6>Medicine</h6>
                    </div>
                </div>
                <div className="card3">
                    <div className="card3-contents">
                        <div className="drinks-icon">
                            <img src={redwineimage} className="drinks-image" />
                        </div>
                        <h6>Drinks</h6>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className="aboutservices">
                <div className="center-banner">
                    <h5 className="center-feature-title">Who are we?</h5>
                    <h1>We're all you need for <span className="customer-need-variable">food</span> as quick as possible</h1>
                    <p>From late-night cravings to urgent needs, we’ve got you covered! Whether you’re hungry for your favorite meal, need drinks to keep you refreshed, or require medicine in a pinch, Deliver.io brings food, beverages, and health essentials right to your doorstep.</p>
                </div>
                <div className="feature1">
                    <img className="door-delivery-icon"src="./reshot-icon-door-delivery-ZF9NXL8GRJ.svg"/>
                    <h4>Door Delivery</h4>
                    <p>Safe and efficient delivery of all you need right at your doorstep!</p>

                </div>
                <div className="feature2">
                    <img className="fast-delivery-icon" src="./reshot-icon-fast-delivery-MYXAG6DCQR.svg" />
                    <h4>Fast Delivery</h4>
                    <p>We guarantee all your items will be delivered in record time!</p>

                </div>
                <div className="feature3">
                    <img className="support-icon" src="./reshot-icon-support-6PY97FCEVH.svg" />
                    <h4>Support</h4>
                    <p>Customer support is always on standby to address any queries or issues.</p>
                </div>
            </div>
        </section>
        </>
    )
}