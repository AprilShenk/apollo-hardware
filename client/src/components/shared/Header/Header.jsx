import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header(props) {

  const { input, handleChange } = props
  return (
    <div className="header">
      <div className="left-side">
        <Link className="header-links" id="header-title" to="/">
          <img className="attributes" id="header-logo" src="https://storage.googleapis.com/p3images/Logos/logo_black_header.png" alt="Apollo Hardware Logo"></img>
        </Link>
        <Link className="header-links" id="header-products" to="/products">SHOP</Link>
        <Link className="header-links" id="header-add-products" to="/add-products">ADMIN</Link>
      </div>
      <div className="right-side">
        <Link className="header-search" to="/products/search-results">
          <form className="search-form">
            <input className="search-input" name="Search" type='text' value={input} onChange={handleChange} placeholder='Search Product' />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </Link>
      </div>
    </div>


  )
}

export default Header;