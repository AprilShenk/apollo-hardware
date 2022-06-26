import React from "react";
import "./WelcomeContainer.css";
import { Link } from "react-router-dom";

const WelcomeContainer = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left-side">
        <h1 className="welcome-title">WELCOME TO APOLLO HARDWARE</h1>
        <h2 className="welcome-subtitle">We rise above your competition</h2>
        <p className="welcome-p">
          At Apollo Hardware we have been helping customers for 666 years make
          it to the moon and back with their project ideas. Help us inspire you
          to do more on your next project
        </p>
        <Link to="/add-product">
          <button id="add-product" type="submit">
            ADD PRODUCT
          </button>
        </Link>
      </div>
      <div className="welcome-right-side">
        <img
          className="attributes"
          id="homepage-img"
          src="https://lh3.googleusercontent.com/lv2mcuvTzcbh9rskPj97RXwFu2Otxs5dI270TW-NcSXb4sLK166f_il6Q-CrKaY0dPKtuvgEyl5KlcNJWwI1ojj2phLWmGKJeJevkraH7JKIUWWPS6l9JN65WAG1CeuAYVEMUpVkcqKPKeFn9lOg0JuoGjUird537WjP7FkfHeaAYYBs3otgraBgwUWrTocqryypsFvaqVMRtOyLWFvxsG7TfrGP3-ya9cSsdNh4w4A04UYezZyxk0KVwpwXB5Y_FlMmetY5kpdCeXV0oe_bV62yM7DGUZKABmLkGrUDvenDhTyjJJh-UlHCdvffK0S30CJ_RY_cn7MMAwqKqR1YmEpcGYkU_oE0SSg98_vjTtZZHr5T4CbFU_W1DMYRW0VL6eyUEPRzuMbIjYjXH0KrQaZP56vkGPD5Dfv1FDXyplfYwlrH6w2yKQelBggRY_CQOYwy3ulKDa6e9VBiJpbEyTIfFZYct30PZ-mJIEV5z7fYB1V1jNVDDLVXxnRG0Np5GTCWAh9ntXABrF91pac8WsIyB0cl7BXwSoqiCUQCQPI6NQLONICj1iPDdWoADhccTmH6JpMWkJVV1rR3pZWYo3je_4cq6i1EAwUJRMk1DXmvu_PsaGiW0-zMxWtS9J3V7OZClHoSDfAJ2OaOqscJw6pEZXHOdHfoe3RJF7nzdyGQM7DvzYY-tM9oikY31UOI8obiU7FCqi-ecj6C3wUKKeQs6YqUXa5rwHmxyrwTCqLuzH3LjXHAaqjB5QcmXijOlWR1ylaSssTcsCz1I-e6Y2P_MHbhF_MDNKfcoGiLBAQEMb3OBSHZtkDN8BSvQpFvBvMWAQ=w700-h525-no?authuser=0"
          alt="Not available"
        ></img>
      </div>
    </div>
  );
};

export default WelcomeContainer;
