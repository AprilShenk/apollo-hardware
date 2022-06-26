import React, { useEffect, useRef } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header(props) {
  const history = useHistory();
  const inputElement = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/products/search-results") {
      inputElement.current.focus();
    }
  }, [location]);

  return (
    <div className="header">
      <div id="left-side">
        <NavLink id="header-title" to="/">
          <img
            className="attributes"
            id="header-logo"
            src="https://lh3.googleusercontent.com/GtWTz_yrwjEveZTISEW3Fr5g5hD1LgFCso3EiBpmshhrI6jA1_rTI1CPkwASbIR-0tMqWuuXJBLTBWn15M1rEKpITopbSSVcRgqT7ixEUKD0y7WnEdGTgrF4q3GHW564ZpfbC9LDrlxjZzb79lH4ZVp231URdf0VVNcGmYn5wl3KAF2LN9-4kcZrlGbP3tj59F0u035aih0_T53eRe60r_r_o5YOLtJQWopQGYuM5ZzXcD2oCh42KnfNfJCHtoQNRlQVxHmDizbhzwofOqKN0jgsFGeDBE5CSX6G_8L37ftPDS1nyklPW996rinp4GBUe4TZCv8E6c9bcX6WDATlSv2OJgepwCe8kxcaQ_byvWJUoULgO_LDmY4P7rXv7-pEJTFsG58NyLoSHR1DIII5p2_rs041CI7--Ycee8nmemuUyieV6yzvV9JJzG5iSsWOpCUrXWOi6aGxJ_po_83reSjqxoQphd4nA5unYWQyKBHkMPZfSVc56kwTCjgdqKlUheBwdghjgjKClGeerniFkcgWdtyvIMMf4n4ToJ3Vcg5RvPT7xhTPpCpaIK7q5FpDVWFubCwaZ8i19v-rX4gUShoyTl2yg3VD2kX07vmtAmu-cb8CbsaqJaymkEnUKIW0125k_OezBHc9IvZUjO5NbbqlOqs4l_xOfCEMsH5zrl6GLRNG04WHWz2lGkrnkHtHQykWALkhY2KSFO4vyv6Rw7gJm0tVU0I2hoeyDsBVtj_e_YmR6TCd1CBZNOfSCLwBrC6rwdDFM5qxChpzlZDTUgkbPzmlznM_Z8Q3U199lgZx3ENdtecJfyXvJavT4G9P9QfygA=w191-h63-no?authuser=0"
            alt="Apollo Hardware Logo"
          ></img>
        </NavLink>
        <div className="header-links-container">
          <NavLink
            className="header-links"
            id="header-products"
            to="/products"
            activeStyle={{ color: "#148DD9" }}
          >
            SHOP
          </NavLink>
          <NavLink
            className="header-links"
            id="header-add-products"
            to="/add-product"
            activeStyle={{ color: "#148DD9" }}
          >
            ADMIN
          </NavLink>
        </div>
      </div>
      <div className="header-right-side">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-input"
            name="Search"
            type="text"
            value={props.value}
            placeholder="Search Product"
            onChange={props.handleChange}
            onClick={() => history.push("/products/search-results")}
            ref={inputElement}
          />
          <span>
            <button className="search-button" id="search">
              <FontAwesomeIcon className="fa" icon={faSearch} />
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links

export default Header;
