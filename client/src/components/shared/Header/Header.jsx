import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { getProducts } from "../../../services/products";

function Header(props) {

  const [allProducts, setAllProducts] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])
  const history = useHistory()

  

  // const handleChange = event => {
    // function filterTest (allProducts) {
    //   if (event.target.value.toLowerCase() == filter to create a function-test that looks through the all products array and returns watch matches  ) {
        
    //   }
    // }
    // console.log(allProducts)
    // const newQueriedProducts = allProducts.filter((filterResult) => {
    //   if (allProducts.product.name.toLowerCase().includes(event.target.value.toLowerCase())) {
    //     return (
    //       filterResult
    //     )
    //   }
    // })

//     const queriedProducts = allProducts.filter((filterResult) => {
//       if (allProducts.product.name.toLowerCase().includes(event.target.value.toLowerCase())) {
//         return (
//           filterResult
//         )
//       }
//     })

//     console.log(queriedProducts)
// }
    
    // const queriedProducts = allProducts.filter(product => product.name.toLowerCase() ===event.target.value.toLowerCase(){return true})
    // console.log(event.target.value.toLowerCase())

  //   console.log(allProducts)
  //   setQueriedProducts(queriedProducts)
  // }



  return (
    <div className="header">
      <div className="left-side">
        <NavLink id="header-title" to="/">
          <img className="attributes"
            id="header-logo"
            src="https://storage.googleapis.com/p3images/Logos/logo_black_header.png"
            alt="Apollo Hardware Logo"></img>
        </NavLink>
        <div>
          <NavLink className="header-links"
            id="header-products"
            to="/products"
            activeStyle={{ color: '#148DD9' }}>SHOP</NavLink>
          <NavLink className="header-links"
            id="header-add-products"
            to="/add-product"
            activeStyle={{ color: '#148DD9' }}>ADMIN</NavLink>
        </div>
      </div>
      <div className="right-side"> 
        <form className="search-form"
          onSubmit={(e) => e.preventDefault()}>
          <input className="search-input"
            name="Search" type='text'
            value={props.value}
            placeholder='Search Product'
            onChange={props.handleChange}
            onClick={() => history.push("/products/search-results")}/>
          <span><button className="search-button"
            id="search">
            <FontAwesomeIcon className="fa" icon={faSearch} /></button></span>
          </form>
      </div>
    </div>


  )
}

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links
// <img className="search-icon" src="/search-icon.png" alt="Search"></img>
//<span><button className="search-button" id="search"><i className="fa fa-search"></i></button></span> 

export default Header;