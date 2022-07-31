import React from "react";
import {NavLink} from 'react-router-dom';

function NavBar () {

    return(
        <div className="NavBar">
            <div className="NavItems">
                <NavLink to="/"> <p className="nav-home">Home</p> </NavLink>
                <NavLink to="/ProductPage"> <p className="nav-Products">Products</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="shopping-bag"></div>
            <div className="user-img"></div>
            <p className="login">Login</p>
        </div>
    )
}

export default NavBar;