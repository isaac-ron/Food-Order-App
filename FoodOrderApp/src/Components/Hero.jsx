import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Easy way to make an order</h3>
        <h1>
          <span>HUNGRY?</span> Just wait <br />
          food at <span>your door</span>
        </h1>
        <p>
          Partnering with your favorite restaurants to get your food sizzling hot!
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Order now</button>
          <button className="btn-secondary">See all foods</button>
        </div>
        <div className="hero-icons">
          <div>
            <i className='bi bi-shield-check'></i>
            100% secure checkout</div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./7607414_3687290.svg" alt="Delivery person" />
      </div>
    </section>
  );
};

export default Hero;
