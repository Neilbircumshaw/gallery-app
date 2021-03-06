import React from "react";
import { NavLink } from "react-router-dom";

//This code creates an unordered list with the list items as NavLinks to the respective URL paths


const NavMenu = props => {

 return(

    <nav className="main-nav">
      <ul>
        <li><NavLink exact to="/" >Home</NavLink></li>
        <li><NavLink exact to="/search/cats" >Cats</NavLink></li>
        <li><NavLink exact to='/search/dogs'>Dogs</NavLink></li>
        <li><NavLink exact to='/search/sloths'>Sloths</NavLink></li>
        <li><NavLink exact to='/search'> Search</NavLink></li>
      </ul>
    </nav>
 )
};

export default NavMenu
