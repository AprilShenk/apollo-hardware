import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header(props) {




  return (
    <div className="header">
      <div className="left-side">
        <NavLink id="header-title" to="/">
          <img className="attributes" id="header-logo" src="https://storage.googleapis.com/p3images/Logos/logo_black_header.png" alt="Apollo Hardware Logo"></img>
        </NavLink>
        <div>
          <NavLink className="header-links" id="header-products" to="/products" activeStyle={{ color: '#148DD9' }}>SHOP</NavLink>
          <NavLink className="header-links" id="header-add-products" to="/add-product" activeStyle={{ color: '#148DD9' }}>ADMIN</NavLink>
        </div>
      </div>
      <div className="right-side"> 
          <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input className="search-input" name="Search" type='text' value={props.value} placeholder='Search Product' onChange={(e) => props.onChange(e)} />
            <span><button className="search-button" id="search"> <FontAwesomeIcon className="fa" icon={faSearch} /></button></span>
          </form>
      </div>
    </div>


  )
}

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links
// <img className="search-icon" src="/search-icon.png" alt="Search"></img>
//<span><button className="search-button" id="search"><i className="fa fa-search"></i></button></span> 

export default Header;