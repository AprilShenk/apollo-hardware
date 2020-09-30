import React from 'react';
import "./WelcomeContainer.css";
import { Link } from 'react-router-dom';

const WelcomeContainer = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left-side">
        <h1 className="welcome-title">WELCOME TO APOLLO HARDWARE</h1>
        <h2 className="welcome-subtitle">We rise above your competition</h2>
        <p className="welcome-p">At Apollo Hardware we have been helping customers for 666 years make it to the moon and back with their project ideas. Help us inspire you to do more on your next project</p>
        <Link to="/add-product">
        <button id="add-product" type="submit">ADD PRODUCT</button>
        </Link>
      </div>
      <div className="welcome-right-side">
      <img className="attributes" id="homepage-img" src="https://storage.googleapis.com/p3images/HomePage/original_size_hero_image.jpg" alt="Not available"></img>
      </div>
      
    </div>
  );
};

export default WelcomeContainer;